var a=JSON.parse(localStorage.getItem("tab_storage"))
a["ad_removal"] = true
localStorage.setItem("tab_storage",JSON.stringify(a))
