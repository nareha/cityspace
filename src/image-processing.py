import PyPDF2 as pypdf 
import pandas as pd

def findAllSubstrings(a_str, sub):
    start = 0
    while True:
        start = a_str.find(sub, start) #get the index of each substring
        if start == -1: return
        yield a_str[start - 3:start+len(sub) + 3] #return the substring itself as we find them. python do be kinda epic
        start += len(sub)
#use list (findAllSubstrings(...)) to get a list of each index
#note: start-3 and +3 because there is a space between the "out of" text and at most 2 digit numbers. if we get extra text at the front, we need to get rid of it regardless

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
        #print(textList[i])
        valueList[i] = list(findAllSubstrings(textList[i], "out of"))
        #for some reason, the pdf reader will extract in such a way that the categories on page 2 come in reverse order
        #ie we get categories 1-3 then 5, 4
        
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