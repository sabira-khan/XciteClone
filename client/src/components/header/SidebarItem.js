import { useState } from "react"
import "./sidebar.css";

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar2-item open" : "sidebar2-item"}>
                <div className="sidebar2-title">
                    <span>
                        {/* { item.icon && <i className={item.icon}></i> } */}
                        {item.title}    
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar2-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                    
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar2-item plain">
               
                {item.title}
            </a>
        )
    }
}