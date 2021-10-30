import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';
import { TranslationService } from 'src/app/_metronic/core/services/translation.service';

@Component({
  selector: 'app-subheader1',
  templateUrl: './subheader1.component.html',
})
export class Subheader1Component implements OnInit {
  breadcrump: any = [];

  constructor(private router: Router, private translate: TranslationService){}
  
 ngOnInit() {
    this.updateBreadcrump();//initialize the breadcrump..
    // 
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.updateBreadcrump();//initialize the breadcrump when url is changed..
    });
  }

  updateBreadcrump(){
    this.breadcrump = [{"title": "Users", link: "/users"}];
    let url = document.location.pathname || "";
    if(!url) return false;
    // 
    if(this.isUrlContains(url,"dashboard")){
      return false;// in case the home page is fired..
    }else if(
      this.isUrlContains(url,"users-settings") ||
      this.isUrlContains(url,"create-store") ||
      this.isUrlContains(url,"user-details") ||
      this.isUrlContains(url,"user-ads") || 
      this.isUrlContains(url,"user-comments") || 
      this.isUrlContains(url,"read-comment") || 
      this.isUrlContains(url,"edit-comment") ||
      this.isUrlContains(url,"user-edit")
      ){
      this.breadcrump.push({title: "User Settings", link: "/users-settings"});
      if(this.isUrlContains(url,"users")){
        this.breadcrump.push({title: "Create New Store", link: "#"});
      }
      if(this.isUrlContains(url,"user-details")){
        this.breadcrump.push({title: "User Details", link: "#"});
      }
      if(this.isUrlContains(url,"user-ads")){
        this.breadcrump.push({title: "User ADS", link: "#"});
      }
      if(this.isUrlContains(url,"user-comments") || this.isUrlContains(url,"read-comment") || this.isUrlContains(url,"edit-comment") ){
        this.breadcrump.push({title: "User Comments", link: "#"});
        if(this.isUrlContains(url,"read-comment")){
          this.breadcrump.push({title: "Read Comment", link: "#"});
        }
        if(this.isUrlContains(url,"edit-comment")){
          this.breadcrump.push({title: "Update Comment", link: "#"});
        }
      }
      if(this.isUrlContains(url,"user-edit")){
        this.breadcrump.push({title: "Edit Profile", link: "#"});
      }
    }
    else if(this.isUrlContains(url,"special-category")){
      this.breadcrump.push({title: "Special Category Filters", link: "/special-category"});
      if(this.isUrlContains(url,"-create")){
        this.breadcrump.push({title: "Create New Options", link: "#"});
      }
      else if(this.isUrlContains(url,"-edit")){
        this.breadcrump.push({title: "Update Options", link: "#"});
      }
    }
    else if(this.isUrlContains(url,"translation-category")){
      this.breadcrump.push({title: "Category Translation", link: "/translation-category"});
      if(this.isUrlContains(url,"-create")){
        this.breadcrump.push({title: "Create a Translation", link: "#"});
      }
      else if(this.isUrlContains(url,"-edit")){
        this.breadcrump.push({title: "Update a Translation", link: "#"});
      }
    }
    else if(this.isUrlContains(url,"filter-settings") || this.isUrlContains(url,"filter-setting")){
      this.breadcrump.push({title: "Filter Settings", link: "/filter-settings"});
      if(this.isUrlContains(url,"-create")){
        this.breadcrump.push({title: "Create New Subcategory Filter", link: "#"});
      }
      else if(this.isUrlContains(url,"-edit")){
        this.breadcrump.push({title: "Update Subcategory Filter", link: "#"});
      }
    }
    else if(this.isUrlContains(url,"filter-options")){
      this.breadcrump.push({title: "Filter Options", link: "/filter-options"});
      if(this.isUrlContains(url,"-create")){
        this.breadcrump.push({title: "Create New Filter Option", link: "#"});
      }
      else if(this.isUrlContains(url,"-edit")){
        this.breadcrump.push({title: "Update Filter Option", link: "#"});
      }
    }
    else if(this.isUrlContains(url,"stores") || this.isUrlContains(url,"store-details") || this.isUrlContains(url,"edit-store")){
      this.breadcrump.push({title: "Stores Management", link: "/stores"});
      if(this.isUrlContains(url,"-details")){
        this.breadcrump.push({title: "Store Details", link: "#"});
      }
      if(this.isUrlContains(url,"edit-store")){
        this.breadcrump.push({title: "Update Strore", link: "#"});
      }

    }
    else if(
      this.isUrlContains(url,"barters") ||
      this.isUrlContains(url,"barter-ad-stats") || 
      this.isUrlContains(url,"barter-ad-comments")
      ){
      this.breadcrump.push({title: "Barters", link: "/barters"});
      if(this.isUrlContains(url,"barter-ad-stats")){
        this.breadcrump.push({title: "AD Stats", link: "#"});
      }
      if(this.isUrlContains(url,"barter-ad-comments")){
        this.breadcrump.push({title: "AD Comments", link: "#"});
      }
    }
    else if(
      this.isUrlContains(url,"ads-settings") ||
      this.isUrlContains(url,"ad-edit") ||
      this.isUrlContains(url,"ad-stats") || 
      this.isUrlContains(url,"ad-comments")
        ){
      this.breadcrump.push({title: "ADS Settings", link: "/ads-settings"});
      if(this.isUrlContains(url,"ad-edit")){
        this.breadcrump.push({title: "Update AD", link: "#"});
      }
      if(this.isUrlContains(url,"ad-stats")){
        this.breadcrump.push({title: "AD Stats", link: "#"});
      }
      if(this.isUrlContains(url,"ad-comments")){
        this.breadcrump.push({title: "AD Comments", link: "#"});
      }
    }
    
    else if(this.isUrlContains(url,"web-advertisements") || this.isUrlContains(url,"web-advertisement")){
      this.breadcrump.push({title: "Web Advertisements", link: "/web-advertisements"});
      if(this.isUrlContains(url,"-create")){
        this.breadcrump.push({title: "Create A Web Advertisements", link: "#"});
      }
      else if(this.isUrlContains(url,"-edit")){
        this.breadcrump.push({title: "Update A Web Advertisements", link: "#"});
      }
    }
    else if(this.isUrlContains(url,"mobile-advertisements") || this.isUrlContains(url,"mobile-advertisement")){
      this.breadcrump.push({title: "Mobile Advertisements", link: "/mobile-advertisements"});
      if(this.isUrlContains(url,"-create")){
        this.breadcrump.push({title: "Create A Mobile Advertisements", link: "#"});
      }
      else if(this.isUrlContains(url,"-edit")){
        this.breadcrump.push({title: "Update A Mobile Advertisements", link: "#"});
      }
    }
    else if(this.isUrlContains(url,"announcements")){
      this.breadcrump.push({title: "Announcements", link: "/announcements"});
    }
    else if(this.isUrlContains(url,"category")){
      this.breadcrump.push({title: "Categories And Subcategories", link: "/category"});
      if(this.isUrlContains(url,"-edit")){
        this.breadcrump.push({title: this.translate.t("SHARED.UPDATE_CATEGORY"), link: "#"});
      }
      else if(this.isUrlContains(url,"sub-category-create")){
        this.breadcrump.push({title: "Create Sub Category", link: "#"});
      }
      else if(this.isUrlContains(url,"-create")){
        this.breadcrump.push({title: this.translate.t("SHARED.CREATE_CATEGORY"), link: "#"});
      }
    }
    else if(this.isUrlContains(url,"notifications-reports")){
      this.breadcrump.push({title: "Reports", link: "/notifications-reports"});
    }
    else if(this.isUrlContains(url,"comments-managment")){
      this.breadcrump.push({title: "Comments Managment", link: "/comments-managment"});
    }
    else if(this.isUrlContains(url,"admin-messages")){
      this.breadcrump.push({title: "Admin Messages", link: "/admin-messages"});
    }
    else if(this.isUrlContains(url,"item-settings")){
      this.breadcrump.push({title: "Item Settings", link: "/item-settings"});
    }
    else if(this.isUrlContains(url,"states") || this.isUrlContains(url,"state-edit")){
      this.breadcrump.push({title: "States", link: "/states"});
      if(this.isUrlContains(url,"state-edit")){
        this.breadcrump.push({title: "Edit State", link: "#"});
      }
    }
    else if(this.isUrlContains(url,"privacy-policy")){
      this.breadcrump.push({title: this.translate.t("Privacy policy"), link: "/privacy-policy"});
    }else if(this.isUrlContains(url,"terms-conditions")){
      this.breadcrump.push({title: this.translate.t("Terms & conditions"), link: "/terms-conditions"});
    }else if(this.isUrlContains(url,"about-us")){
      this.breadcrump.push({title: this.translate.t("About us"), link: "/about-us"});
    }
  }

  isUrlContains(str,subStr){
    if(str.indexOf(subStr) !== -1) return true;
    return false;
  }

}
