import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar-component.component.html',
    styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {
    public routes: Route[] = [
        { title: 'Home', url: '../', active: true },
        { title: 'Videos', url: '', active: false },
        { title: 'Channels', url: '', active: false }
    ];
    public options: string[] = ["Subscriptions", "History", "Upload"];
    public filterFormGroup = new FormGroup({});

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.filterFormGroup = this.getFormGroup();
    }

    private getFormGroup() { 
        let form = this.formBuilder.group({
            search: [
                { value: null, disabled: false },
                Validators.compose([])
            ]
        });

        return form;
    }

    public onSearch() {
        let searchKey = this.filterFormGroup.get('search')?.value;
        this.router.navigate([searchKey], { relativeTo: this.route })
    }   

    public onNavigate(route: Route) {
        console.log(route);
        this.router.navigate([route.url], { relativeTo: this.route });
    }

}

interface Route {
    title: string,
    url: string,
    active: boolean
}

interface Options {
    title: string
}