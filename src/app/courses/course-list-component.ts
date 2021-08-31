import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list-component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];
    
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Curso de Angular: Forms',
                imgUrl: '',
                price: 100,
                code: 'CRS-0001',
                duration: 120,
                rating: 5.5,
                releaseDate: 'August, 31, 2021'
            },
            {
                id: 2,
                name: 'Curso de Angular: HTML',
                imgUrl: '',
                price: 50,
                code: 'CRS-0002',
                duration: 150,
                rating: 5.8,
                releaseDate: 'September, 1, 2021'
            }
        ]
    }

}