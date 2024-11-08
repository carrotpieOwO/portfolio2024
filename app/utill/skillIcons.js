
// img.shields.io에서 제공하는 skill태그 주소를 생성하고 반환한다.
export const getImageUrl = (skill) => {
    const skillsColor = {
        javascript: 'F7DF1E',
        typescript: '3178C6',
        jquery: '0965a7',
        angularjs: 'DD0031',
        react:'61DAFB',
        redux: '7c41be',
        antdesign: 'f7495b',
        chartjs: 'f67377',
        d3js: 'f78949',
        spring: '6DB33F',
        mysql: '42759c',
        firebase: 'f7c52b',
        gatsby: '7952B3',
        graphql: 'E10098'
    }
    
    const skillId = skill.toLowerCase().replace('.', '');
    const skillColor = skillsColor[`${skillId}`] ? skillsColor[`${skillId}`] : 'efefef'
    const logoColor = skill === 'React' || skill === 'Javascript' || skill === 'firebase' ? 'black' : 'white'

    return `https://img.shields.io/badge/${skill}-${skillColor}?style=flat-square&logo=${skill}&logoColor=${logoColor}`
}
