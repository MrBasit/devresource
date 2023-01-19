import { Component } from '@angular/core';
import { FilterqueryService } from '../services/filterquery.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 
  dataSource;
  constructor(private service: FilterqueryService){
    this.dataSource = CardContent;
  }

}

const CardContent: Categories[] = [
  {
    subCategory: 'icons',
    category: 'assets',
    date: Date.now().toString(),
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
  subCategory: 'Assets',
  category: 'assets',
  date: Date.now().toString(),
  card: [
    {
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    type: 'icons',
    path: 'assets/icon',
    discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
    }
    ,
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      type: 'icons',
      path: 'assets/icon',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
      }
    ,
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      type: 'icons',
      path: 'assets/icon',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
      }
    ,
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      type: 'icons',
      path: 'assets/icon',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
      }
    ,
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      type: 'icons',
      path: 'assets/icon',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Asperiores quod Atque, nobis ducimus error quos commodialias veniam cupiditate consequuntur'
      }
    ,
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
  date: Date.now().toString(),
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
]
}
]