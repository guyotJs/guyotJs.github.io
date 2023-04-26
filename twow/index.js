import { createApp } from 'https://unpkg.com/petite-vue?module'
createApp({
    version:"Pre-alpha 0.1", 
    view:false,
    open(){
        this.view = true;
    }
}).mount()
