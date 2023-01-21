import { Component, OnInit } from '@angular/core';
import '../modals/categories';
import { FilterqueryService } from '../services/filterquery.service';
@Component({

  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  cardContent: Categories[];
  filteredCategories?: Categories[];

  constructor(private queryService: FilterqueryService ){
    this.cardContent = CardContent;
    this.filter();
  }

  ngOnInit(): void {
    
  }

  filter(){
    this.queryService.query$.subscribe((query: any) => {

    this.filteredCategories =  this.cardContent.filter(val=> { 
      console.log(val)
       return val.subCategory?.toLowerCase() == query.toLowerCase();
    });
    })
  }
}

const CardContent: Categories[] = [
  {
    subCategory: 'icons',
    category: 'assets',
    card: [
      {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      type: 'icons',
      path: 'assets/icon',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
      },
      {
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        type: 'icons',
        path: 'assets/icon',
        discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
        },
        {
          image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          type: 'icons',
          path: 'assets/icon',
          discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
          },
          {
            image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            type: 'icons',
            path: 'assets/icon',
            discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
            }
  ]
},
{
  subCategory: 'Assets',
  category: 'assets',
  card: [
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    },
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      type: 'icons',
      path: 'assets/icon',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
      },
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    },
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      type: 'icons',
      path: 'assets/icon',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
      },
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      type: 'icons',
      path: 'assets/icon',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
      }
]
},
{
  subCategory: 'Music',
  category: 'assets',
  card: [
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    },
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    },
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    },
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    },
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    },
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    },
]
}
]