const biodata = {
    name: "Andrawan Erlang",
    age: 22,
    hobbies: ['membaca','gaming'],
    isMarried: false,
    schoolList: [
        {
            name: "Universitas Indonesia", 
            yearIn: 2016, 
            yearOut: 2020, 
            major: "Geofisika"
        },
        {
            name: "SMAN 1 Bekasi", 
            yearIn: 2013, 
            yearOut: 2016, 
            major: "IPA"
        },
        {
            name: "SMPN 1 Tambun", 
            yearIn: 2011, 
            yearOut: 2013, 
            major: null
        },
        {
            name: "SDN Mangun Jaya", 
            yearIn: 2005, 
            yearOut: 2011, 
            major: null
        }
    ],
    skills: [
        {
            skillName: "Javascript",
            level: "beginner"
        },
        {
            skillName: "Ms.Office",
            level: "advanced"
        },
        {
            skillName: "Rebahan",
            level: "expert"
        },
    ],
    interestInCoding: true
}

let output = biodata.skills[1]
console.log(output)