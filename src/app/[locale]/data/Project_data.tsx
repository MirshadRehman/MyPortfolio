
interface Project{
    id: number;
    title: string;
    description: string;
    status: string;
    catagory: string;
    start_date:string;
    end_date:string;
    organization:string;
    frontend:string;
    backend:string;
    database:string;
    background:string;
    image:string;
}
const Project_data: Project[]=[
    {
        id:1,
        organization:"self project",
        start_date:"Dec 2024",
        end_date:"Dec 2024",
        catagory: "Web Application",
        title: "My Dairy",
        description:"A simple website for notepad where user can CREATE, UPDATE, READ & DELETE notes after logging in or signup if don't have an account.",
        status:"Completed",
        frontend:"ReactJS - jsx, JavaScript, CSS",
        backend:"django (python)",
        database:"MySql (wampserver)",
        background:"/images/noteweb_background.jpg",
        image:"/images/",
    },
    {
        id:2,
        organization:"Dibrugarh University/NIELIT (Major project - MCA)",
        start_date:"April 2024",
        end_date:"June 2024",
        catagory: "Android Application",
        title: "DoctorQuick",
        description:"Android Application for medical services where user can book appointment with a specialised doctor without visiting a hospital/clinic & also user can book ambulance in case of emergency with just a tap.",
        status:"Completed",
        frontend:"Android Studio (xml)",
        backend:"Android Studio (KOTLIN)",
        database:"Firebase",
        background:"/images/doctorquick_background.jpg",
        image:"/images/",
    },
    {
        id:3,
        organization:"NIELIT Dibrugarh",
        start_date:"Feb 2024",
        end_date:"Feb 2024",
        catagory: "Android Application",
        title: "Note App",
        description:"An android application where we can create, read, update or delete notes",
        status:"Completed",
        frontend:"Android Studio (xml)",
        backend:"Android Studio (KOTLIN)",
        database:"RoomDB",
        background:"/images/noteapp_background.jpg",
        image:"/images/",
    },
    {
        id:4,
        organization:"NIELIT Dibrugarh",
        start_date:"March 2024",
        end_date:"March 2024",
        catagory: "Android Application",
        title: "News App",
        description:"An android application where we can read news which are fetched from newsapi.ai",
        status:"Completed",
        frontend:"Android Studio (xml)",
        backend:"Android Studio (KOTLIN)",
        database:"Not used",
        background:"/images/newsapp_background.jpg",
        image:"/images/",
    },
    {
        id:5,
        organization:"self project",
        start_date:"Dec 2024",
        end_date:"present",
        catagory: "Web Application",
        title: "eCommerce Web",
        description:"",
        status:"Not-Completed",
        frontend:"ReactJS - jsx, JavaScript, CSS",
        backend:"FastApi (python)",
        database:"MySql (wampserver)",
        background:"/images/ecommerce_background.jpg",
        image:"/images/",
    },
    {
        id:6,
        organization:"self project",
        start_date:"Jan 2024",
        end_date:"present",
        catagory: "Web Application",
        title: "Student Record",
        description:"",
        status:"Not-Completed",
        frontend:"ReactJS - jsx, JavaScript, tailwindCSS",
        backend:"FastApi (python)",
        database:"PostgreSQL",
        background:"/images/studentrecord_background.jpg",
        image:"/images/",
    },
    {
        id:7,
        organization:"self project",
        start_date:"April 2025",
        end_date:"April 2025",
        catagory: "Web Application",
        title: "MR Player",
        description:"A Webapp for Music Player where user can add music from their local storage and enjoy it without any ads, looking forward to add a music collection so that user don't have to do that locally",
        status:"on development",
        frontend:"NExtJS - jsx, TypeScript, TailwindCSS",
        backend:"No backend",
        database:"no database",
        background:"/images/MRplayerBack.jpg",
        image:"/images/MRplayer(L).png",
    }
]

export default Project_data