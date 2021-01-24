import PyPDF2 as pypdf 
import pandas as pd

def findAllSubstrings(a_str, sub, boundary = 0):
    start = 0
    while True:
        start = a_str.find(sub, start) #get the index of each substring
        if start == -1: return
        yield a_str[start - boundary:start+len(sub) + boundary] #return the substring itself as we find them. python do be kinda epic
        start += len(sub)
#use list (findAllSubstrings(...)) to get a list of each index
#note: set boundary = 3 because there is a space between the "out of" text and at most 2 digit numbers. if we get extra text at the front, we need to get rid of it regardless

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
        valueList[i] = list(findAllSubstrings(textList[i], "out of", 3))
        #for some reason, the pdf reader will extract in such a way that the categories on page 2 come in reverse order
        #ie we get categories 1-3 then 5, 4

    scores = [[0,0], [0,0], [0,0], [0,0], [0,0]]
    numScores = 0
    for i in range(len(valueList)):
        for j in range(len(valueList[i])):
            bounIndex = valueList[i][j].find("out of")
            score = ""
            for k in range (0, bounIndex):
                if (valueList[i][j][k].isdigit()):
                    score += valueList[i][j][k]
            scores[numScores][0] = int(score)
            possibScore = ""
            for k in range (bounIndex + len("out of"), len(valueList[i][j])):
                if (valueList[i][j][k].isdigit()):
                    possibScore += valueList[i][j][k]
            scores[numScores][1] = int(possibScore)
            numScores += 1

    for i in range(len(scores)):
        print(str(scores[i][0]) + " out of " +  str(scores[i][1]))

    ratingCategories = {
        "non-disc laws": scores[0], 
        "municipality as employer": scores[1],
        "municipal services": scores[2],
        "leadership on equality": scores[3],
        "law enforcement": scores[4]
    } #note: order is 1-3, 5, 4

    print(ratingCategories["non-disc laws"])
    
main()
    #use pandas to move dictionary to csv? maybe make a City class type with each of the attributes