export interface FaqItem {
    id: string,
    attributes: {
        question: string,
        Answer: string
    }
}

export interface StepItem {
    id: string,
    attributes: {
        stepContainer: [
            {
                Title: string,
                Steps: {
                    id: string,
                    title: string,
                    content: string
                }
            }
        ]
    }
}   

export interface DonutData {
    name: string,
    totalsEmails: number
}

export interface BigLineChart {
    date: string,
    totalEmails: number
}

export interface Categories {
    id: string,
    name: string,
    lastActivity: string,
    amount: number,
    total: number
}