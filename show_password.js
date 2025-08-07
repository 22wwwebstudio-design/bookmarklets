javascript:inputs = document.getElementsByTagName("input"); 
for (let index = 0; index < inputs.length; index++)
{                             
const element = inputs[index]; 
const type = element.getAttribute("type"); 
if(type == "password")                            
{                                
element.setAttribute("type", "text"); 
element.setAttribute("changed", "yes"); 
}                             
if(type == "text" && element.getAttribute("changed") == "yes") 
{                                     
element.setAttribute("type", "password");        
element.removeAttribute("changed");                 
}                         
}
