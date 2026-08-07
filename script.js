/* ===========================================
    中国象棋网站 JavaScript
    Part 1
=========================================== */

/* ========= 返回顶部按钮 ========= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ========= 导航栏滚动变色 ========= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background="rgba(120,0,0,.95)";

        navbar.style.padding="14px 8%";

        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }

    else{

        navbar.style.background="rgba(139,0,0,.88)";

        navbar.style.padding="18px 8%";

        navbar.style.boxShadow="none";

    }

});

/* ========= 平滑滚动 ========= */

const links=document.querySelectorAll(".nav-links a");

links.forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const id=this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});
/* ===========================================
    Part 2
    Scroll Reveal Animation
=========================================== */

/*
    所有 section
*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.classList.add("fade-in");

    observer.observe(section);

});


/* ===========================================
    Hero Animation
=========================================== */

window.addEventListener("load",()=>{

    const heroTitle=document.querySelector(".hero h1");

    const heroSub=document.querySelector(".hero h2");

    const heroText=document.querySelector(".hero p");

    const heroBtn=document.querySelector(".hero .btn");

    heroTitle.style.opacity=0;
    heroSub.style.opacity=0;
    heroText.style.opacity=0;
    heroBtn.style.opacity=0;

    heroTitle.style.transform="translateY(40px)";
    heroSub.style.transform="translateY(40px)";
    heroText.style.transform="translateY(40px)";
    heroBtn.style.transform="translateY(40px)";

    setTimeout(()=>{

        heroTitle.style.transition="1s";
        heroTitle.style.opacity=1;
        heroTitle.style.transform="translateY(0)";

    },200);

    setTimeout(()=>{

        heroSub.style.transition="1s";
        heroSub.style.opacity=1;
        heroSub.style.transform="translateY(0)";

    },500);

    setTimeout(()=>{

        heroText.style.transition="1s";
        heroText.style.opacity=1;
        heroText.style.transform="translateY(0)";

    },800);

    setTimeout(()=>{

        heroBtn.style.transition="1s";
        heroBtn.style.opacity=1;
        heroBtn.style.transform="translateY(0)";

    },1100);

});


/* ===========================================
    Feature Cards Animation
=========================================== */

const cards=document.querySelectorAll(".feature-card");

cards.forEach((card,index)=>{

    card.style.opacity=0;

    card.style.transform="translateY(40px)";

    setTimeout(()=>{

        card.style.transition=".8s";

        card.style.opacity=1;

        card.style.transform="translateY(0)";

    },1500+index*200);

});


/* ===========================================
    Piece Cards Hover Effect
=========================================== */

const pieces=document.querySelectorAll(".piece-card");

pieces.forEach(piece=>{

    piece.addEventListener("mouseenter",()=>{

        piece.style.transform="translateY(-12px) scale(1.03)";

    });

    piece.addEventListener("mouseleave",()=>{

        piece.style.transform="translateY(0) scale(1)";

    });

});
/* ===========================================
    Part 3
    Professional Effects
=========================================== */

/* ========= 当前导航栏高亮 ========= */

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ========= 图片缓慢放大 ========= */

const hero=document.querySelector(".hero");

let scale=1;

setInterval(()=>{

    scale+=0.0002;

    hero.style.backgroundSize=(scale*100)+"%";

},30);


/* ========= 按钮点击效果 ========= */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.95)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },120);

    });

});


/* ========= 棋子卡片点击 ========= */

const pieceCards=document.querySelectorAll(".piece-card");

pieceCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const title=card.querySelector("h3").innerText;

        alert("你点击了：" + title);

    });

});


/* ========= 技巧列表 Hover ========= */

const tips=document.querySelectorAll(".tips-list div");

tips.forEach(tip=>{

    tip.addEventListener("mouseenter",()=>{

        tip.style.paddingLeft="18px";

        tip.style.color="#8B0000";

    });

    tip.addEventListener("mouseleave",()=>{

        tip.style.paddingLeft="0px";

        tip.style.color="#2C2C2C";

    });

});


/* ========= 页面载入欢迎 ========= */

window.addEventListener("load",()=>{

    console.log("欢迎来到中国象棋网站！");

});


/* ========= Footer 年份自动更新 ========= */

const footerText=document.querySelector("footer p:last-child");

const year=new Date().getFullYear();

footerText.innerHTML="© "+year+" Chinese Chess Promotion Website";


/* ========= 页面滚动百分比 ========= */

window.addEventListener("scroll",()=>{

    const scrollTop=window.scrollY;

    const pageHeight=document.body.scrollHeight-window.innerHeight;

    const percent=Math.round(scrollTop/pageHeight*100);

    console.log("浏览进度："+percent+"%");

});
