interface ResumeData {
    data: {
        basics: {
            label: string
            name: string
            phone: string
            summary: string
            website: string
        }
        work: any[]
        projects: any[]
        education: any[]
        skills: any[]
    }
}