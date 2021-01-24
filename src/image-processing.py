import PyPDF2 as pypdf 
import pandas as pd

def findAllSubstrings(a_str, sub):
    start = 0
    while True:
        start = a_str.find(sub, start)
        if start == -1: return
        yield start #return the index of each substring as we find them. python do be kinda epic
        start += len(sub)
#use list (findAllSubstrings(...)) to get a list of each index

def main(): 
    #load in one pdf - los angeles
    losangeles = pypdf.PdfFileReader("mei-files/MEI-2020-Los-Angeles-California.pdf")
    laNumPages = losangeles.getNumPages()
    laInfo = losangeles.getDocumentInfo()

    #separate each page into a list
    textList = ["", ""] #initialize empty textList. each document is 2 pages, so 2 items is enough.
    valueList = [[], []] #this will contain the text surrounding the number values we need

    for i in range(laNumPages):
        currPage = losangeles.getPage(i) #pages start indexed at 0
        textList[i] = currPage.extractText()
        valueList[i] = list(findAllSubstrings(textList[i], "out of"))

    for i in range(len(valueList)):
        print(valueList[i])

    ratingCategories = {
        "non-disc laws": None, 
        "municipality as employer": None,
        "municipal services": None,
        "law enforcement": None,
        "leadership on equality": None
    }

main()
    #use pandas to move dictionary to csv? maybe make a City class type with each of the attributes