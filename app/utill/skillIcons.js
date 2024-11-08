
// img.shields.io에서 제공하는 skill태그 주소를 생성하고 반환한다.
export const getImageUrl = (skill) => {
    const skillsColor = {
        javascript: 'F7DF1E',
        typescript: '3178C6',
        jquery: '0769AD',
        nextjs: '000000',
        angular: 'DD0031',
        react:'61DAFB',
        reactquery: 'FF4154',
        redux: '764ABC',
        antdesign: '0170FE',
        chartjs: 'FF6384',
        d3js: 'F9A03C',
        spring: '6DB33F',
        mysql: '42759c',
        firebase: 'f7c52b',
        gatsby: '7952B3',
        graphql: 'E10098',
        styledcomponents: 'DB7093',
        tailwindcss: '06B6D4',
        mui: '007FFF',
        devexpress: 'FF7200',
        html5: 'E34F26',
        css3: '1572B6'
    }
    
    const skillId = skill.toLowerCase().replace(' ', '').replace('.', '');
    const convertedSkillName = convertSkillName(skill);
    const skillColor = skillsColor[`${skillId}`] ? skillsColor[`${skillId}`] : 'efefef'
    const blackLabel = ['react', 'javascript', 'firebase']
    const logoColor = blackLabel.includes(skillId) ? 'black' : 'white'

    return `https://img.shields.io/badge/${convertedSkillName}-${skillColor}?style=flat&logo=${skill}&logoColor=${logoColor}`
}


const convertSkillName = (skill) => {
    switch (skill) {
        case 'html5':
            return 'HTML'
        case 'css3':
            return 'CSS'          
        case 'angular':
            return 'Angular.js'
        default:
            return skill
    }
}