const works = [
    {
        projectId: 'cog',
        projectNm: '뇌인지기능검사',
        mainImg: '/images/works/jeios/kog.png',
        period: '2024-06 ~',
        skills: ['Javascript', 'Next.js', 'React Query', 'Zustand', 'emotion', 'Ant Design', 'recharts.js'],
        description: '치매 진단 서비스를 제공하는 프로젝트에 참여하여 계정, 검사기관, 사용자를 관리하고 검사 결과 데이터를 시각적으로 제공하는 웹 서비스를 개발하였습니다.',
        link: [
            {
                type: 'Detail',
                url: '134492cc11258010b3bff7d83dfd8df3'
            },
        ],
        color: 'rgb(97, 189, 139)'
    },
    {
        projectId: 'tododok',
        projectNm: 'TODODOK',
        mainImg: '/images/works/tododok.png',
        period: '2024-08',
        skills: ['Javascript', 'Next.js', 'Zustand'],
        description: 'Next.js로 개발하고 Vercel로 배포한 타이핑 게임입니다. 캐릭터를 조합해서 생성하고, 타이핑을 하여 캐릭터를 성장시킵니다.',
        link: [
            {
                type: 'Site',
                url: 'https://tododok.vercel.app/'
            }, 
        ],
        color: 'rgb(254, 198, 222)'
    },
    {
        projectId: 'healthcare',
        projectNm: 'Motioncore Fitness',
        mainImg: '/images/works/jeios/health.png',
        period: '2023-11 ~',
        skills: ['Javascript', 'React', 'React Query', 'Zustand', 'emotion', 'Ant Design', 'Chart.js'],
        description: '기존 서비스 중이던 프로젝트를 새롭게 리뉴얼한 프로젝트입니다. 상태관리 라이브러리를 변경하고, 보다 유지보수에 용이하도록 설계하였습니다.',
        link: [
            {
                type: 'Detail',
                url: '099d90fb151a46e68132fe94375c98c7'
            },
        ],
        color: 'rgb(180, 25, 41)'
    },
    {
        projectId: 'blog',
        projectNm: 'BLOG',
        mainImg: '/images/works/blog2023.png',
        period: '2023-09',
        skills: ['Typescript', 'Next.js', 'React Query', 'tailwindCSS', 'MongoDB'],
        description: 'Next.js 공부용으로 새단장한 블로그입니다. toast UI를 사용하여 작성 화면을 만들고, 작성된 내용은 MongoDB에 저장하였습니다.',
        link: [
            {
                type: 'Git',
                url: 'https://github.com/carrotpieOwO/nextjs-blog'
            },
            {
                type: 'Site',
                url: 'https://nextjs-blog-carrotpieowo.vercel.app'
            }, 
        ],
        color: 'rgb(254, 204, 203)'
    },
    {
        projectId: 'medical',
        projectNm: 'Motioncore Medical',
        mainImg: '/images/works/jeios/medical.png',
        period: '2023-05 ~',
        skills: ['Javascript', 'React', 'Redux', 'styled components', 'MUI', 'Chart.js'],
        description: '기존 서비스 중이던 프로젝트를 이어받아 유지보수를 진행하고 있으며, 차트 관리 페이지, 차트 연동 페이지, 차트 조회 페이지가 새롭게 추가되어 신규 개발을 진행하였습니다.',
        link: [
            {
                type: 'Detail',
                url: '61c2277848674f1fa81ae37711be3fb7'
            },
        ],
        color: 'rgb(87, 111, 237)'
    },
    {
        projectId: 'homepage',
        projectNm: 'Jeios Homepage',
        mainImg: '/images/works/jeios/homepage.png',
        period: '2023-06',
        skills: ['Typescript', 'Next.js', 'tailwindCSS'],
        description: 'Next.js 프레임워크를 사용하고 Vercel을 통해 배포한 자사 홈페이지 프로젝트입니다.',
        link: [
            {
                type: 'Detail',
                url: '9536c23d83794351b765c0db54586fcc'
            },
        ],
        color: 'rgb(225, 31, 53)'
    },
    {
        projectId: 'portfolio',
        projectNm: 'portfolio 2023',
        mainImg: '/images/works/portfolio.png',
        period: '2023-04',
        skills: ['Javascript', 'React', 'Three.js'],
        description: '2023년도 포트폴리오 페이지입니다. React-three로 3D 오브젝트를 렌더링 하였습니다.',
        link: [
            {
                type: 'Git',
                url: 'https://github.com/carrotpieOwO/ha0peno2023'
            },
            {
                type: 'Site',
                url: 'https://ha0peno.netlify.app/'
            }, 
        ],
        color: 'rgb(209, 224, 244)'
    },
    {
        projectId: 'weatherWear',
        projectNm: 'Weather Wear',
        mainImg: '/images/works/weatherwear.png',
        period: '2023-03',
        skills: ['TypeScript', 'React', 'Firebase'],
        description: '기온별 옷 추천/기록 및 기록을 토대로 어떤 브랜드를 선호하고, 어떤 종류의 옷이 많고 또 자주입는지 분석하는 서비스를 제공합니다.',
        link: [
            {
                type: 'Git',
                url: 'https://github.com/carrotpieOwO/closet-weather'
            },
            {
                type: 'Site',
                url: 'https://weather-wear.netlify.app/'
            }, 
        ],
        color: 'rgb(140, 214, 212)'
    },
    {
        projectId: 'ha0penoBlog',
        projectNm: 'ha0peno Blog',
        mainImg: '/images/works/ha0penoBlog.png',
        period: '2023-02',
        skills: ['TypeScript', 'React', 'Gatsby', 'GraphQL'],
        description: 'Gatsby를 사용한 기술 블로그입니다. MDX로 작성하여 기록하였습니다.',
        link: [
            {
                type: 'Git',
                url: 'https://github.com/carrotpieOwO/ha0peno-blog'
            },
            {
                type: 'Site',
                url: 'https://ha0peno-blog.netlify.app/'
            }, 
        ],
        color: 'rgb(91, 94, 118)'
    },
    {
        projectId: 'todolist',
        projectNm: 'ha0 Todo',
        mainImg: '/images/works/todo/todoTitle.png',
        period: '2023-01',
        skills: ['TypeScript', 'React', 'Redux', 'AntDesign'],
        description: 'todo App으로 할일목록의 CRUD와 날짜별, 상태별, 태그별 필터링을 제공하고 타임라인으로 레이아웃 변경 기능을 제공합니다.',
        link: [
            {
                type: 'Git',
                url: 'https://github.com/carrotpieOwO/todo_react_type'
            },
            {
                type: 'Site',
                url: 'https://carrotpieowo.github.io/'
            }, 
        ],
        color: 'rgb(235, 84, 145)'
    },
    {
        projectId: 'dataArchive',
        projectNm: 'Data Archive',
        mainImg: '/images/works/forshore/archive_add.png',
        period: '2022-07',
        skills: ['Javascript', 'angular', 'd3.js', 'gridstack.js'],
        description: '선박별 CCTV데이터 및 위치정보(MAP) 모니터링 대쉬보드 페이지로, 사용자가 원하는 위젯을 추가/제거/배치할 수 있는 페이지입니다.',
        link: [
            {
                type: 'Detail',
                url: '134492cc1125803e9b79f5b6483464af'
            }
        ],
        color: 'rgb(65, 133, 255)'
    },
    {
        projectId: 'ktsat',
        projectNm: 'KTSAT VNMS',
        mainImg: '/images/works/ktvnms/ktTitle.png',
        period: '2021-05 ~ 2021-12',
        skills: ['Javascript', 'AGgrid', 'Chart.js'],
        description: 'KTSAT의 선사, 선박, 회원, 권한관리 페이지 및 트래픽 처리/사용량 모니터링 페이지 등 다수 페이지를 개발하였습니다.',
        link: [
            {
                type: 'Detail',
                url: '134492cc112580eaa2ededea919c745d'
            }
        ],
        color: 'rgb(220, 78, 104)'
    },
    {
        projectId: 'eexi',
        projectNm: '한국선급 EEXI',
        mainImg: '/images/works/eexi/eexi.png',
        period: '2021-03',
        skills: ['Javascript', 'jQuery', 'c3.js', 'DevExpress'],
        description: '이산화탄소 배출 규제 모니터링 시스템으로, 입력 데이터에 따라 다양한 조건에 맞춰 계산하여 규제에 맞는 결과값을 그래프로 그려줍니다.',
        link: [
            {
                type: 'Detail',
                url: '134492cc11258046b9bad0ca2f81e802',
            }
        ],
        color: 'rgb(2, 178, 148)'
    },
    {
        projectId: 'vocManager',
        projectNm: 'VOC Manager',
        mainImg: '/images/works/forshore/voc.png',
        period: '2020-12',
        skills: ['Javascript', 'angular', 'Dropzone.js'],
        description: '사용자가 VOC를 등록하는 페이지로, 권한별 등록/이미지 업로드/조회/수정/삭제 기능 및 다양한 필터링 기능을 제공합니다.',
        link: [
            {
                type: 'Detail',
                url: 'db8c62a8e387421eaad9f490a4c0a2a8'
            }
        ],
        color: 'rgb(78, 92, 119)'
    },
]

export default works;