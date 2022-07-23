import navbar from '../components/navbar.js';
import footer from '../components/footer.js';
let solutions = [
    {
        img:"https://tmetric.com/media/eaicsaaz/icon-solution-developers-over.svg",
        title:"Software Developers",
        description:"Measure project progress, set billable rates, send detailed reports and invoice clients."
    },
    {
        img:"https://tmetric.com/media/ljhg1qum/icon-solution-marketing-over.svg",
        title:"Marketing Agencies",
        description:"Free yourself from issues of remote teams/freelancers management, complete any project in time and get paid."
    },
    {
        img:"https://tmetric.com/media/0oaafmp1/icon-solution-designers-over.svg",
        title:"Designers",
        description:"Concentrate on making great designs and leave time management issues to TMetric."
    },
    {
        img:"https://tmetric.com/media/pknjjmsf/icon-solution-freelancers-over.svg",
        title:"Freelancers",
        description:"Eliminate guesswork, gain client trust and discover how profitable your freelance projects are."
    },
    {
        img:"https://tmetric.com/media/opepw0xc/icon-solution-support-over.svg",
        title:"Customer Support",
        description:"Track time allocated by engineers to their support tickets, categorize time spent on various support activities."
    },
    {
        img:"https://tmetric.com/media/jnsnxtl4/icon-solution-consultants-over.svg",
        title:"Consultants",
        description:"Automate tracking time for consulting services and generate invoices for clients."
    },
    {
        img:"https://tmetric.com/media/wjiiufje/icon-solution-lawyers-over.svg",
        title:"Lawyers",
        description:"Spend less time on administrative tasks and more time with a client."
    },
    {
        img:"https://tmetric.com/media/nm2lh2ns/icon-solution-employees-over.svg",
        title:"Employees",
        description:"Monitor employees productivity level and generate transparent report about teamwork."
    },
    {
        img:"https://tmetric.com/media/q3tkyixi/icon-solution-personal-over.svg",
        title:"Personal",
        description:"Measure your personal productivity without an effort."
    },
    {
        img:"https://tmetric.com/media/c4up525j/icon-solution-contractors-over.svg",
        title:"Contractors",
        description:"Create projects, setup billable rates, and budgets, track work time, generate reports, and prepare printable docs for your clients with a click."
    }
]
let trustedBy = [
    {
        img:"https://tmetric.com/media/wdgiiy51/logo-business-glide.svg"
    },
    {
        img:"https://tmetric.com/media/uzplg3xo/logo-business-microscope-it.svg"
    },
    {
        img:"https://tmetric.com/media/wtvdfb00/logo-business-chc-advocacia.svg"
    },
    {
        img:"https://tmetric.com/media/lhxfyeio/logo-business-makedit.svg"
    },
    {
        img:"https://tmetric.com/media/xl3pvyku/logo-business-viator-group.svg"
    },
    {
        img:"https://tmetric.com/media/0p3bzx4v/logo-business-seadev.svg"
    },
    {
        img:"https://tmetric.com/media/0jqiqjfm/logo-business-afzelius.svg"
    },
    {
        img:"https://tmetric.com/media/3jslxcgk/logo-business-representa.svg"
    }
]

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector(".footer-container").innerHTML = footer();

let getData = ()=>{
    append(solutions);
}
let getDataTrustedBy = async()=>{
    trustedByAppend(trustedBy);
}

let trustedByAppend = (images)=>{
    let container = document.createElement("div");
    container.setAttribute("id", "trustedByContainer");
    images.forEach(el => {
        let image = document.createElement("img");
        image.src = el.img;
        container.append(image);
    });
    document.querySelector("#trustedBy").append(container)
}

let append = (solutions)=>{
    let container = document.querySelector("#container");
    solutions.forEach(el => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img;
        let title = document.createElement("h2");
        title.innerText = el.title;
        title.setAttribute("class", "Objectivity-Bold");
        let description = document.createElement("p");
        description.innerText = el.description;
        description.setAttribute("class", "PT-Root-UI-Medium");
        let arrow = document.createElement("i");
        arrow.setAttribute("class", "fa-solid fa-arrow-right");
        div.append(img, title, description, arrow);
        container.append(div);
    });
}
getData();
getDataTrustedBy()