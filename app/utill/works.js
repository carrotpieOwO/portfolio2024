const works = [
    {
        projectId: 'weatherWear',
        projectNm: 'Weather Wear',
        mainImg: '/images/works/weatherwear.png',
        period: '2023-03 ~ 2023-03',
        skills: ['TypeScript', 'React', 'firebase'],
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
        period: '2023-02 ~ 2023-03',
        skills: ['TypeScript', 'React', 'Gatsby', 'GraphQL'],
        description: 'Gatsby를 사용한 기술 블로그입니다. MDX로 작성하여 기록하고 있습니다.',
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
        period: '2023-01 ~ 2023-01',
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
        period: '2022-05 ~ 2022-07',
        skills: ['Javascript', 'angularJS', 'd3.js', 'gridstack.js'],
        description: '선박별 CCTV데이터 및 위치정보(MAP) 모니터링 대쉬보드 페이지로, 사용자가 원하는 위젯을 추가/제거/배치할 수 있는 페이지입니다.',
        contents: [
            {
                images:[{image: '/images/works/forshore/archive.png'}],
                content: [
                    '선박으로부터 수집된 cctv, 위치정보 데이터 조회를 위한 대쉬보드  페이지 개발',
                    '사용자가 대쉬보드를 생성/수정/삭제가능하며, 생성한 대쉬보드 내에서 위젯을 생성/수정/삭제하여 원하는 대로 대쉬보드를 꾸릴 수 있는 기능',
                    '생성된 위젯의 상단 날짜버튼을 통하여 날짜를 변경하면, 해당 날짜의 cctv사진 혹은 위치정보를 조회하도록 구현',
                    '위젯의 타입이 맵일 경우, 위치정보를 기준으로 맵 생성',
                    '선택한 날짜의 데이터를 시간순으로 받아와 d3.js를 사용하여 하단에 확대/축소 가능한 GanttChart 생성',
                    'GanttChart의 bar클릭 시 해당 시간의 데이터를 보여주도록 구현',
                    '더 정확한 시간대 확인을 위하여 GanttChart의 bar를 hover할 경우 툴팁으로 시간대를 보여주도록 구현',
                    'play버튼 클릭 시 선택한 시간부터 1초마다 GanttChart의 bar를 이동하며 다음데이터를 보여주는 재생기능 구현',
                    'sync버튼 클릭 시 모든 위젯의 날짜 및 시간대를 동일하게 맞추고 같은 시간대의 데이터를 보여주도록 구현',
                    'sync가 활성화되어있는 상태에서 한가지 위젯의 날짜/시간을 변경할 경우 모든 위젯에서도 같이 변경되도록 구현'
                ]
            },
            {
                images:[{image: '/images/works/forshore/archive_zoom.png'}],
                content: [
                    '위젯에서 확대버튼 클릭 시, 전체화면보기 기능 구현',
                ]
            },
            {
                images:[{image: '/images/works/forshore/archive_edit.png', size: [50, 40]}, {image: '/images/works/forshore/archive_add.png', size: [50, 40]}],
                content: [
                    'gridstack.js를 사용하여 선택한 위젯을 원하는 위치에 원하는 크기로 배치하는 기능 개발',
                    '위젯 추가 시, 해당 아이템의 가장 최신 이미지 데이터(혹은 위치데이터)를 조회하여 샘플이미지로 사용',
                    '위젯 위치지정 범위 및 크기조정 범위 설정',
                ]
            },
            {
                images:[
                    {image: '/images/works/forshore/archive_modal.png', size: [35, 30]}, 
                    {image: '/images/works/forshore/archive_tab.png', size: [35, 40]},
                    {image: '/images/works/forshore/archive_tab_edit.png', size: [35, 40]}
                ],
                content: [
                    '대쉬보드 편집 모달 개발',
                    '[+]탭을 클릭하여 탭을 새로 생성하고, save버튼을 클릭하여 대쉬보드 생성',
                    '탭으로 선택한 대쉬보드에 포함시킬 위젯을 체크박스로 선택하여 대쉬보드 구성',
                    '탭의 수가 많아질 경우 [...]탭 생성 후 선택가능하도록 구현',
                    '탭을 더블클릭하여 대쉬보드명 수정 및 대쉬보드 삭제기능 개발',
                ]
            },
            {
                images:[{image: '/images/works/forshore/archive_tooltip.png'}],
                content: [
                    '메인화면에서 선박을 선택할 경우, 해당 선박에서 생성된 대쉬보드를 팝업으로 보여주도록 구현',
                ]
            },
        ],
        link: [
            {
                type: 'Detail',
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
        contents: [
            {
                images:[{image: '/images/works/ktvnms/trafficThrough.png'}],
                content: [
                    '선사/선박 별 위성통신 처리량 조회 페이지 개발',
                    'Chart.js를 사용하여 선박별 위성통신 파이차트 및 라인차트 구현',
                    '시간대별 트래픽 처리량을 스크롤 up/down으로 zoom하여 조회한 기간 내의 상세 그래프를 확인할 수 있도록 구현',
                    'AGgrid를 사용하여 컬럼별 너비조정 가능한 테이블 구현',
                    'AGgrid를 사용하여 상단 select박스에서 선택한 컬럼만 노출하는 컬럼 숨기기 기능 구현',
                    '테이블 페이지네이션 / 컬럼별 정렬기능 / EXCEL, PDF Export 기능 구현',
                    '선사별/선박별/서비스타입별/기간별 검색기능 구현',
                    '검색란에 값 입력 시 자동검색하여 select box로 보여주는 기능 구현',
                    '검색란에 선사 혹은 선명 입력 시 서비스타입 자동선택 기능 구현',
                    '검색 예외처리',
                    'resolution에서 선택한 값의 시간주기대로 데이터를 받아오도록 구현'
                ]
            },
            {
                images:[{image: '/images/works/ktvnms/trafficUsage.png'}],
                content: [
                    '선사/선박 별 위성통신 사용량 조회 페이지 개발',
                    '드롭다운에서 total/tcp/udp/http/other를 선택하면 선택한 항목별 up/down 그래프로 보여주도록 구현',
                ]
            },
            {
                images:[{image: '/images/works/ktvnms/userReport.png'}],
                content: ['선사/선박별 위성통신 처리량/사용량 조회 페이지 개발', '그래프와 데이터를 모두 출력하는 기능 구현']
            },
            {
                images:[{image: '/images/works/ktvnms/company.png'}],
                content: ['등록된 선사 조회 페이지 구현 : 선사 등록/조회/수정/삭제/유효성검사/예외처리/검색기능 구현']
            },
            {
                images:[{image: '/images/works/ktvnms/ship.png'}],
                content: ['등록된 선박 조회 페이지 구현 : 선박 등록/조회/수정/삭제/유효성검사/예외처리/검색기능 구현']
            },
            {
                images:[
                    { image: '/images/works/ktvnms/user.png', size: [50, 40] },
                    { image: '/images/works/ktvnms/userModal.png', size: [20, 40] },
                ],
                content: [
                    '등록된 유저 조회 페이지 구현 : 유저 등록/조회/수정/삭제/유효성검사/예외처리/검색기능 구현',
                    '아이디 중복체크/자동아이디 생성기능 구현',
                    '정규표현식으로 아이디/비밀번호/전화번호 유효성 검사 구현',
                    'Company 선택 시, Company에 지정된 Role Type데이터를 불러와 Select Box 리스트 구성',
                    'Company, Role Type 선택 시, 해당 조건에 속하는 Role데이터를 불러와 Select Box리스트 구성 및 자동입력기능 구현',
                    '선사별 유저목록 분류'
                ]
            },
            {
                images:[{image: '/images/works/ktvnms/role.png'}],
                content: [
                    '등록된 권한 조회 페이지 구현 : 권한 등록/조회/수정/삭제/유효성검사/예외처리/검색기능 구현',
                    '탭이동 시, 검색한 권한/선박or선사별로 조회하도록 구현',
                ]
            },
            {
                images:[
                    {image: '/images/works/ktvnms/code.png', size: [50,40]},
                    {image: '/images/works/ktvnms/codeModal.png', size: [25,40]}
                ],
                content: [
                    '등록된 코드 조회 페이지 구현 : 코드 등록/조회/수정/삭제/유효성검사/예외처리/검색기능 구현',
                    'International Settings의 Add버튼 클릭 시 input이 추가되도록 구현',
                    'Code 중복체크 구현',
                    '카테고리별 코드목록 분류'
                ]
            },
            {
                images:[{image: '/images/works/ktvnms/dashboard.png'}],
                content: ['각종 상태/통계 관련 대쉬보드 페이지 개발', 'Header의 auto refresh토글이 true일 경우 10분마다 데이터 업데이트되도록 구현']
            },
        ],
        link: [
            {
                type: 'Detail',
            }
        ],
        color: 'rgb(220, 78, 104)'
    },
    {
        projectId: 'eexi',
        projectNm: '한국선급 EEXI',
        mainImg: '/images/works/eexi/eexi.png',
        period: '2021-01 ~ 2021-03',
        skills: ['Javascript', 'jQuery', 'c3.js', 'DevExtreme'],
        description: '이산화탄소 배출 규제 모니터링 시스템으로, 입력 데이터에 따라 다양한 조건에 맞춰 계산하여 규제에 맞는 결과값을 그래프로 그려줍니다.',
        contents: [
            {
                images:[
                    {image: '/images/works/eexi/particular.png', size: [70, 50]},
                ],
                content: [
                    '선박 등록/ 수정/ 삭제 / 조회 / 유효성검사 기능 구현', 
                    '선박리스트 정렬기능 구현', 
                    'Complete란에 각 탭별 진행상태를 보여주도록 조건에 따른 색상 지정',
                ],
            },
            {
                images:[
                    {image: '/images/works/eexi/eexiInfo.png', size: [70, 50]},
                ],
                content: [
                    '필수입력 필드/ 자동입력 필드 / 에러발생 필드에 따라 필드 배경색 다르게 지정',
                    '선택한 선박의 선종별로 필수입력 필드 다르게 설정',
                    '각 필드별 상세설명 및 단위 설정',
                    '에러발생필드 total개수 표현 및 클릭 시 해당 필드로 포커싱 처리'
                ],
            },
            {
                images:[
                    {image: '/images/works/eexi/eexiError.png', size: [70, 50]},
                ],
                content: [
                    '에러발생필드 total개수 표현 및 클릭 시 해당 필드로 포커싱 처리'
                ],
            },
            {
                images:[
                    {image: '/images/works/eexi/shipspeed.png'},
                ],
                content: [
                    'Ship Speed 계산, 저장기능 구현',
                    'particular에서 입력한 정보를 토대로 Engine Power를 계산하여 자동입력 필드에 넣어주도록 구현', 
                    'Speed Power Curve 토글이 true일 경우, SPEED-POWER테이블을 그려주고 필수입력필드로 설정', 
                    '화살표 버튼을 통하여 역계산 기능 구현',
                    'Speed Power Curve 토글이 false일 경우, 테이블 숨김처리 및 별도 계산식 적용하여 계산결과 자동입력 구현',
                ],
            },
            {
                images:[
                    {image: '/images/works/eexi/shipspeedGraph.png'},
                ],
                content: [
                    '유저입력값에 따른 계산기능 구현, 계산결과 자동입력 및 c3.js로 커브그래프 구현',
                ],
            },
            {
                images:[
                    {image: '/images/works/eexi/eexiCalculationTable.png', size: [70, 55]},  
                ],
                content: [
                    'Dual컬림 체크여부에 따라 필수입력필드 조건변경',
                ],
                flexColumn: true,
            },
            {
                images:[
                    {image: '/images/works/eexi/eexiAditional.png', size: [70, 55]},
                ],
                content: [
                    'Dual컬림 체크여부에 따라 ADDITIONAL INFORMATION테이블 추가/숨김 처리',
                ],
                flexColumn: true,
            },
            {
                images:[
                    {image: '/images/works/eexi/eexiCalculation.png', size: [70, 55]},  
                ],
                content: [
                    '입력 조건에 따른 계산식 적용하여 EEXI 계산기능 구현',
                    '계산결과 수치값 반영 및 c3.js로 커브그래프 구현',
                    '각 항목별 계산결과값 팝업 테이블 구현'
                ],
                flexColumn: true,
            },
        ],
        link: [
            {
                type: 'Detail',
            }
        ],
        color: 'rgb(2, 178, 148)'
    },
    {
        projectId: 'vocManager',
        projectNm: 'VOC Manager',
        mainImg: '/images/works/forshore/voc.png',
        period: '2020-11 ~ 2020-12',
        skills: ['Javascript', 'angularJS', 'Dropzone.js'],
        description: '사용자가 VOC를 등록하는 페이지로, 권한별 등록/이미지 업로드/조회/수정/삭제 기능 및 다양한 필터링 기능을 제공합니다.',
        contents: [
            {
                images:[{image: '/images/works/forshore/voc.png'}],
                content: [
                    '접속한 계정이 속한 회사에서 등록된 voc 목록 조회기능 개발',
                    '검색, 시간순 정렬, urgent필터, process step필터기능 개발',
                    'voc 상세조회기능 개발',
                    'Dropzone.js를 사용한 이미지 조회기능 개발',
                ]
            },
            {
                images:[{image: '/images/works/forshore/voc_edit.png'}],
                content: [
                    '권한에 따른 voc 수정 / 삭제기능 개발',
                    'Dropzone.js를 사용한 이미지 업로드기능 개발',
                    '이미지 파일 크기 및 개수 제한 / 삭제기능 개발',
                    '필드별 수정권한에 따른 readonly 처리',
                    '유효성 검사 처리',
                ]
            },
            {
                images:[{image: '/images/works/forshore/vocmodal.png'}],
                content: [
                    'voc 등록기능 개발',
                    '필드별 수정권한에 따른 readonly 처리',
                    '유효성 검사 처리',
                    'Dropzone.js를 사용한 이미지 업로드기능 개발'
                ]
            },
            {
                images:[{image: '/images/works/forshore/voclist_open.png', size:[50, 40]}, {image: '/images/works/forshore/voclist_close.png', size:[30, 40]}],
                content: [
                    '접속한 계정이 등록한 voc만 조회하는 기능 개발',
                    '시간순 정렬, urgent 필터, process step 필터기능 개발',
                    'voc 상세조회기능 개발',
                ]
            }
        ],
        link: [
            {
                type: 'Detail',
            }
        ],
        color: 'rgb(78, 92, 119)'
    },
    {
        projectId: 'nyam',
        projectNm: '냠냠 (인스타 클론)',
        mainImg: '/images/works/nyam/tag.png',
        period: '2020-02 ~ 2020-04',
        skills: ['Spring', 'Javascript', 'MySQL'],
        description: '맛집정보를 공유하는 SNS로 로그인/회원가입 등의 기본 서비스부터 위치정보와 사진공유 및 팔로우, 댓글, 지도검색 등의 기능을 구현하였습니다.',
        contents: [
            {
                images:[{image: '/images/works/nyam/db.png', size: [55, 62]}],
                content: ['DB구조 ']
            },
            {
                images:[{image: '/images/works/nyam/tag.png', size: [70, 65]}],
                content: [
                    '무한스크롤 구현',
                    '정규표현식을 사용하여 검색결과 리스트 구현',
                    '검색결과 리스트 출력 및 검색결과에 해당하는 다른 태그버튼 클릭 시 해당 태그로 재검색하도록 구현'
                ]
            },
            {
                images:[{image: '/images/works/nyam/place.png', size: [70, 65]}],
                content: [
                    '검색결과가 있을 경우 kakao지도 키워드검색 API를 사용하여 지도에 출력하고 검색결과 리스트를 출력하도록 구현'
                ]
            },
            {
                images:[{image: '/images/works/nyam/detail.png', size: [70, 65]}],
                content: [
                    '좋아요 기능 및 좋아요한 유저리스트 출력 기능 구현',
                    '팔로우/언팔로우 기능 구현',
                    '보관기능 구현(해당 게시글을 나의 마이페이지 보관함에 저장)',
                    '카카오지도 API를 사용하여 가게명으로 위치정보 출력(가게위치, 주소, 전화번호)',
                ]
            },
            {
                images:[{image: '/images/works/nyam/comment.png', size: [70, 65]}],
                content: [
                    '댓글 작성 및 삭제기능 구현(말풍선 형식)',
                    '해당 게시글의 위치정보를 통해 근처 맛집의 리뷰게시글 출력'
                ]
            },
            {
                images:[{image: '/images/works/nyam/mypage.png', size: [70, 65]}],
                content: ['유저의 프로필 정보 출력 및 해당유저의 게시글리스트, 보관함 리스트, 팔로워/팔로잉 리스트 구현']
            },
            {
                images:[{image: '/images/works/nyam/alert.png', size: [70, 65]}],
                content: ['좋아요, 댓글달기, 팔로우한 기록을 최신순으로 정렬하여 출력하도록 구현']
            },
        ],
        color: 'rgb(255, 193, 8)',
        link: [
            {
                type: 'Git',
                url: 'https://github.com/carrotpieOwO/nyam-nyam'
            },
            {
                type: 'Detail',
            }
        ],
    }
]

export default works;