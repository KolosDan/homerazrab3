from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import pymorphy2
from collections import Counter
import re
import string

morph = pymorphy2.MorphAnalyzer()

def clean(text):
    for i in string.punctuation + "»«—":
        text = text.replace(i, " ")

    text = re.sub("\s+", " ", text).strip()

    tokens = [morph.parse(i)[0].normal_form for i in word_tokenize(text, language="russian") if morph.parse(i)[0].normal_form not in stopwords.words("russian") and morph.parse(i)[0].normal_form not in stopwords.words("english") and re.fullmatch("\d+", i) == None and len(i) > 1]
    return tokens

def get_interests(groups):
    keywords = []

    for i in groups:
        try:
            keywords.extend(clean(i['name']))
        except:
            pass

    return [i[0] for i in Counter(keywords).most_common(20)]
    
    
