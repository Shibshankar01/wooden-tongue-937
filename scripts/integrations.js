import navbar from '../components/navbar.js';
import footer from '../components/footer.js';

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector(".footer-container").innerHTML = footer();

let buttonClick =(button)=>{
    allButtons.forEach(el=>{
        if(el==button){
            // el.style.color = "#3070F0";
            el.setAttribute("class", "colorBlue");
            append(filterIntegrations(button.id));
        }
        else{
            // el.style.color = "#4c5157";
            el.setAttribute("class", "colorBlack")
        }
    })
}

let allButtons = document.querySelectorAll("button");;
allButtons.forEach(el=>{
    el.addEventListener("click", ()=>{
        buttonClick(el);
    })
})

let integrations = [
    {
        image: "https://tmetric.com/media/5udinoiq/bitrix_logo.svg",
        name:"bitrix",
        description: "Track time of every project task in Bitrix24",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/1cjfmbrp/figma_logo.svg",
        name:"figma",
        description: "Track all billable hours in Figma",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/2871/gcalendar.svg",
        name:"gcalendar",
        description: "Track time of every event scheduled in Google Calendar",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/npundymi/gdocs_logo.svg",
        name: "gdocs",
        description: "Track how much time you spend with any docs in Google Docs",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/5v0neukw/gkeep_logo.svg",
        name: "gkeep",
        description: "Get plugin for time tracking in Google Keep",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/2872/gmail.svg",
        name: "gmail",
        description: "Track how much time you spend writing/reading emails in Gmail",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/ekqgfnmu/hubspot-logo.svg",
        name: "hubspot",
        description: "Measure how much time you spend on any task in HubSpot",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/kmyblocf/insightly-logo.svg",
        name: "insightly",
        description: "Track time spent on tasks in Insightly",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/ttabcfnu/megaplan_logo.svg",
        name: "megaplan",
        description: "Track time spent on tasks in Megaplan",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/30hht42j/excel_logo.svg",
        name:"excel",
        description: "Track time spent on creating/editing spreadsheets in Excel Online",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/2703/msoffice.svg",
        name: "msoffice",
        description: "Get plugin for tracking time in Microsoft Office Online",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/diud2bok/outlook.svg",
        name: "outlook",
        description: "Track how much time you spend on writing/reading mails in Outlook Online",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/yzeanjjk/outlook-1-1.svg",
        name: "outlook",
        description: "Track time of any Outlook Calendar event directly in TMetric",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/iifpd0bz/monday-logo.svg",
        name: "monday",
        description: "Track time in Monday using TMetric extension",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/0tilsyw2/notion-logo.svg",
        name: "notion",
        description: "Track time on every task created in Notion",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/jnpn1ejw/pipedrive_logo.svg",
        name: "pipedrive",
        description: "Get plugin for time tracking in Pipedrive",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/dtdj5gno/podio_logo.svg",
        name: "podia",
        description: "Measure how much time you spend on any task in Podio",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/plqc02oa/quickbooks_logo.svg",
        name: "quickbooks",
        description: "Time-sync with QuickBooks Online",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/3rsk5uum/salesforce_logo.svg",
        name: "salesforce",
        description: "Track your sales tasks in Saleforce using TMetric extension",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/ld3ad25w/teamwork_logo.svg",
        name: "teamwork",
        description: "Track time spent on tasks in Teamwork",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/decc4ems/zoho_logo.svg",
        name: "zoho",
        description: "Track time in Zoho CRM using TMetric extension",
        category: "Business"
    },
    {
        image: "https://tmetric.com/media/2524/vsts.svg",
        name: "vsts",
        description: "Measure your activity in Azure DevOps Services",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/byadsybd/bitbucket_logo.svg",
        name: "bitbucket",
        description: "Track time of every project issue in Bitbucket",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/3nkluxqn/bugzilla_logo.svg",
        name: "bigzilla",
        description: "Get plugin for time tracking in Bugzilla",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/dhah3gfr/github_logo.svg",
        name: "github",
        description: "Track time of every GitHub issue",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/grah1bkk/gitlab_logo.svg",
        name: "gitlab",
        description: "Track time of every GitLab issue",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/1l1nn2bw/testlink_logo.svg",
        name: "testlink",
        description: "Get plugin for time tracking in TestLink",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/4amjve50/testrail_logo.svg",
        name: "testrail",
        description: "Track time for test execution in TestRail",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/esgdh0cv/vstfs_logo.svg",
        name: "vstfs",
        description: "Track time spent on any activity in TFS",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/c3fhpfy4/trac_logo.svg",
        name: "trac",
        description: "Track how much time you spent on projects and tasks in Trac",
        category: "Development"
    },
    {
        image: "https://tmetric.com/media/hnpf5u5e/dixa_logo.svg",
        name: "dixa",
        description: "Track time of every conversation in Dixa",
        category: "HelpDesk"
    },
    {
        image: "https://tmetric.com/media/fcdjxaov/freshdesk_logo.svg",
        name: "freshdesk",
        description: "Start to track time spent on every support ticket in Freshdesk",
        category: "HelpDesk"
    },
    {
        image: "https://tmetric.com/media/kctpd0hf/usedesk_logo.svg",
        name: "usedesk",
        description: "Track time in Usedesk using TMetric extension",
        category: "HelpDesk"
    },
    {
        image: "https://tmetric.com/media/l3hkcucy/userecho_logo.svg",
        name: "userecho",
        description: "Simple time tracking of support tickets in UserEcho",
        category: "HelpDesk"
    },
    {
        image: "https://tmetric.com/media/ri2c0sn2/uservoice_logo.svg",
        name: "uservoice",
        description: "Get plugin for time tracking in UserVoice",
        category: "HelpDesk"
    },
    {
        image: "https://tmetric.com/media/moefiteq/zammad.svg",
        name: "zammad",
        description: "Track time spent on tickets in Zammad",
        category: "HelpDesk"
    },
    {
        image: "https://tmetric.com/media/p5incyvv/zendesk_logo.svg",
        name: "zendesk",
        description: "Measure how much time you spent on support tickets in Zendesk",
        category: "HelpDesk"
    },
    {
        image: "https://tmetric.com/media/3wphnapb/activecollab-logo.svg",
        name: "acticecollab",
        description: "Start to track time on tasks in ActiveCollab",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/2490/asana.svg",
        name: "asana",
        description: "Start to track time of tasks in Asana",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/c43np4ot/assembla.svg",
        name: "assembla",
        description: "Track time of every activity in Assembla",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/2525/axosoft.svg",
        name: "axosoft",
        description: "Get plugin for time tracking in Axosoft",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/kyflehhc/clickup.svg",
        name: "clickup",
        description: "Track your projects in ClickUp using TMetric extension",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/agkpx3i1/clubhouse.svg",
        name: "clubhouse",
        description: "Track your progress in Clubhouse",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/pgwdvigl/jira_logo.svg",
        name: "jira",
        description: "Track time spent on every task in Jira",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/qhjhfkhu/nifty_logo.svg",
        name: "nifty",
        description: "See how much time is spent on projects and tasks in Nifty",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/2fypdx1b/openproject_logo.svg",
        name: "openproject",
        description: "Get plugin for time tracking in OpenProject",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/v4aeomjm/pivotal_logo.svg",
        name: "pivotal",
        description: "Track time on every task created in Pivotal Tracker",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/qudltoit/redmine_logo.svg",
        name: "redmine",
        description: "Track time of all your tasks and projects in Redmine",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/ub2pvwlo/sprintly_logo.svg",
        name: "sprintly",
        description: "Track time of every project tasks created in Sprintly",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/fflc5fwt/taiga_logo.svg",
        name: "taiga",
        description: "Track time of every task in Taiga.io",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/vhnjpc2b/todoist_logo.svg",
        name: "todoist",
        description: "Track time of your lists and tasks in Todoist",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/wt4dpte4/trello_logo.svg",
        name: "trello",
        description: "Track time spent on every task and project in Trello using TMetric extension",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/uq0nhjx4/wrike_logo.svg",
        name: "wrike",
        description: "Track time project tasks made in Wrike",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/v00p2nl1/youtrack_logo.svg",
        name: "youtrack",
        description: "Track time of every task in YouTrack",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/0yyhbshs/zenhub_logo.svg",
        name: "zenhub",
        description: "Get plugin for time tracking in ZenHub",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/mfxhb5fg/zenkit_logo.svg",
        name: "zenkit",
        description: "Track your progress in Zenkit",
        category: "ProjectManagement"
    },
    {
        image: "https://tmetric.com/media/avxp2vd0/doitim_logo.svg",
        name: "doitim",
        description: "Measure your productivity with Doit.im and TMetric",
        category: "TaskManagement"
    },
    {
        image: "https://tmetric.com/media/al2lgud2/evernote-logo.svg",
        name: "evernote",
        description: "Start to track time of tasks in Evernote",
        category: "TaskManagement"
    },
    {
        image: "https://tmetric.com/media/uyfjlapt/microsoft-to-do-logo.svg",
        name: "microsoft",
        description: "Get plugin for tracking time in Microsoft To Do",
        category: "TaskManagement"
    }
]


let filterIntegrations = (clickedOn)=>{
    let filteredIntegrations = integrations.filter(el=>{
        if(clickedOn == "AllApps"){
            return true;
        }
        else{
            return el.category==clickedOn;
        }
    })
    return filteredIntegrations;
}
let append = (integrations)=>{
    let container = document.querySelector("#integrationContainer");
    container.innerHTML = "";
    integrations.forEach(el=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let description = document.createElement("p");
        description.innerText = el.description;
        div.append(img, description);
        container.append(div);
    })
}
let filteredIntegrations = filterIntegrations("AllApps");
append(filteredIntegrations);

let findIntegration = document.querySelector("#findIntegration");

let findIntegrationEnter = ()=>{
    let query = findIntegration.value;
    let filteredIntegrations = [];
    for (let i = 0; i < integrations.length; i++) {
        if(query==integrations[i].name){
            filteredIntegrations.push(integrations[i]);
            break;
        }
    }
    if(filteredIntegrations.length == 0){
        filteredIntegrations=integrations;
    }
    append(filteredIntegrations);
} 

findIntegration.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        findIntegrationEnter();
    }
    // console.log(e)
});

