import PyPDF2 as pypdf 
import pandas as pd

#load in one pdf - los angeles
losangeles = pypdf.PdfFileReader("mei-files/MEI-2020-Los-Angeles-California.pdf")
laNumPages = losangeles.getNumPages()
laInfo = losangeles.getDocumentInfo()

#separate each page into a list
textList = ["", ""] #initialize empty textList. each document is 2 pages, so 2 items is enough.

for i in range(laNumPages):
    currPage = losangeles.getPage(i) #pages start indexed at 0
    textList[i] = currPage.extractText()

#from the text, extract the numbers.

ratingCategories = {
    "non-disc laws": None, 
    "municipality as employer": None,
    "municipal services": None,
    "law enforcement": None,
    "leadership on equality": None
}

#use pandas to move dictionary to csv? maybe make a City class type with each of the attributes