# Fred's development Blog
* 개발 블로그 소스파일 저장소 및 배포페이지

## 🖥️ 저장소 소개
* 이상민님의 Next.js 기반 오픈소스 블로그 활용
* 단순 블로그 용도 뿐만 아니라, 선배 개발자들의 코드를 살펴보고, 기능을 넣어보는 등 관심에서 시작된 블로그 입니다.
* 글쓰고 기록하는 것을 좋아하는 저에게 Notion database를 활용한 블로깅을 처리하기 위해서 선택했습니다.
* Notion-Github-Vercel 흐름으로 배포가 진행되며 현재는 정적 페이지 배포로 매일 수동으로만 배포됩니다.
* 추후 GA를 활용한 트래픽추적 등 실험적, 학습적 기능을 시도하고 추가해보자 합니다.

### 🧑‍🤝‍🧑 맴버구성
- 김인용
- folk from Lee Sang-min developer

### ⚙️ 개발 환경
- **MainLanguage** : `JavaScript`
- **IDE** : IntelliJ IDEA Ultimate
- **Framework** : Next.js Framework
- **Database** : Notion Database
- **SERVER** : Github page to Vercel platform

### 👋🏻 Contact
- **Email** : admin@yzpocket.com
- **Blog** : https://blog.yzpocket.com/

## Features

**📒 Writing posts using notion**

- No need of commiting to Github for posting anything to your website.
- Posts made on Notion are automaticaly updated on your site.

**📄 Use as a page as resume**

- Useful for generating full page sites using Notion.
- Can be used for Resume, Portfolios etc.

**👀 SEO friendly**

- Dynamically generates OG IMAGEs (thumbnails!) for posts. ([og-image-korean](https://github.com/morethanmin/og-image-korean)).
- Dynamically creates sitemap for posts.

**🤖 Customisable and Supports various plugin through CONFIG**

- Your profile information can be updated through Config. (`site.config.js`)
- Plugins support includes, Google Analytics, Search Console and also Commenting using Github Issues(Utterances) or Cusdis.


## Getting Started
<details>
1. Star this repo.
2. [Fork](https://github.com/morethanmin/morethan-log/fork) the repo to your Profile.
3. Duplicate [this Notion template](https://quasar-season-ed5.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda), and Share to Web.
4. Copy the Web Link and keep note of the Notion Page Id from the Link which will be in this format [username.notion.site/`NOTION_PAGE_ID`?v=`VERSION_ID`].
5. Clone your forked repo and then customize `site.config.js` based on your preference.
6. Deploy on Vercel, with the following environment variables.

   - `NOTION_PAGE_ID` (Required): The Notion page Id got from the Share to Web URL.
   - `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` : For Google analytics Plugin.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` : For Google search console Plugin.

## Contributing

Check out the [Contributing Guide](.github/CONTRIBUTING.md).

### Contributors

<!--
Contributors template:
<a href="https://github.com/{username}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

<p>
<a href="https://github.com/kvaishak"><img src="https://avatars.githubusercontent.com/u/25531121?v=4" width="50px" alt="kvaishak" /></a>&nbsp;&nbsp;<a href="https://github.com/jhk0530"><img src="https://avatars.githubusercontent.com/u/6457691?s=120&v=4" width="50px" alt="jhk0530" /></a>&nbsp;&nbsp;<a href="https://github.com/i99dev"><img src="https://avatars.githubusercontent.com/u/10709888?s=120&v=4" width="50px" alt="i99dev" /></a>&nbsp;&nbsp;<a href="https://github.com/JaeSang1998"><img src="https://avatars.githubusercontent.com/u/58258782?s=120&v=4" width="50px" alt="JaeSang1998" /></a>&nbsp;&nbsp;<a href="https://github.com/vaishak-kaippanchery-liqid"><img src="https://avatars.githubusercontent.com/u/93523060?s=120&v=4" width="50px" alt="vaishak-kaippanchery-liqid" /></a>&nbsp;&nbsp;<a href="https://github.com/itjustbong"><img src="https://avatars.githubusercontent.com/u/29947261?v=4" width="50px" alt="itjustbong" /></a>&nbsp;&nbsp;<a href="https://github.com/ddarkr"><img src="https://avatars.githubusercontent.com/u/6638675?v=4" width="50px" alt="ddarkr" /></a>&nbsp;&nbsp;<a href="https://github.com/lisiver"><img src="https://avatars.githubusercontent.com/u/46680792?v=4" width="50px" alt="lisiver" /></a>&nbsp;&nbsp;<a href="https://github.com/Octoping925"><img src="https://avatars.githubusercontent.com/u/53991994?v=4" width="50px" alt="Octoping925" /></a>&nbsp;&nbsp;<a href="https://github.com/linnilsupak"><img src="https://avatars.githubusercontent.com/u/39083566?v=4" width="50px" alt="linnilsupak" /></a>&nbsp;&nbsp;
</p>

## Support

morethan-log is an MIT-licensed open source project. It can grow thanks to the sponsors and support from the amazing backers.

### Sponsors

<!--
Sponsors template:
<a href="https://github.com/{uesrname}"><img src="{src}" width="50px" alt="{username}" /></a>&nbsp;&nbsp;
-->

<p>
<a href="https://github.com/siyeons"><img src="https://avatars.githubusercontent.com/u/35549653?v=4" width="50px" alt="siyeons" /></a>&nbsp;&nbsp;
</p>
</details>
## License

The [MIT License](LICENSE).
