import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

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
    public searchKeys: string[] = [];
    public flag: boolean = false;
    public searchOptions: string[] = [];

    private ngUnsubscribe = new Subject();
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private localStorageService: LocalStorageService
    ) { }

    ngOnInit(): void {
        this.filterFormGroup = this.getFormGroup();
        this.searchKeys = this.localStorageService.get('search');

        this.valueChanges();
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
        this.searchKeys.push(searchKey);
        this.localStorageService.set('search', this.searchKeys);
        this.router.navigate([searchKey], { relativeTo: this.route });
    }   

    public onNavigate(route: Route) {
        this.router.navigate([route.url], { relativeTo: this.route });
    }

    public onFocusOut() {
        this.flag = false;
    }

    public onFocus() {
        this.flag = true;
        this.searchOptions = this.searchKeys;
    }

    public onSelect(key: string) {
        this.filterFormGroup.get('search')?.patchValue(key);
    }

    private valueChanges() { 
        this.filterFormGroup.get('search')?.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: string) => {
            this.searchOptions = this.searchKeys.filter((key: string) => key.toLowerCase().includes(val.toLowerCase()));
        });
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