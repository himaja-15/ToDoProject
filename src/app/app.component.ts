import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Component,Input, OnInit} from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'


 interface ITask{
  description: string,
  done: boolean
 }
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoForm !: FormGroup;
  tasks:ITask[]=[];
  public done:any[]=[];   
  imp:any[]=[];
  updateId !:any;
  isEditEnabled:boolean=false;
  isImpEditEnabled:boolean=false;
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.todoForm=this.fb.group({
      item:['',Validators.required]

    })
  }
  addTask(taskInput: { value: string; }){
    
  
      let value = taskInput.value;
         taskInput.value = "";
         if(value==''){
      
         }
         else{
          this.tasks.push(
            {
              description: value,
              done: false
            });
      
    
          }
  }
  impTask(taskInput: { value: string; }){
    let value = taskInput.value;
    taskInput.value = "";
    if(value==''){
      
    }
    else{
    this.imp.push(
      {
        description: value,
        done: false
      });
    }

  }
  updateTask(){
    this.tasks[this.updateId].description=this.todoForm.value.item;
    this.tasks[this.updateId].done=false;
    this.todoForm.reset();
    this.updateId=undefined;
    this.isEditEnabled=false;
  }
  editTask(item:ITask,taskInput: { value: string; },i:number){
    let value = taskInput.value;
    // taskInput.value = "";
    if(value==''){
      this.todoForm.controls['item'].setValue(item.description);
      this.updateId=i;
      this.isEditEnabled=true;
    }
  }
  updateimpTask(){
    this.imp[this.updateId].description=this.todoForm.value.item;
    this.imp[this.updateId].done=false;
    this.todoForm.reset();
    this.updateId=undefined;
    this.isImpEditEnabled=false;
  }
  editimpTask(item:ITask,taskInput: { value: string; },a:number){
    let value = taskInput.value;
    // taskInput.value = "";
    if(value==''){
      this.todoForm.controls['item'].setValue(item.description);
      this.updateId=a;
      this.isImpEditEnabled=true;
    }

  }
  deleteTask(i:number){
    this.tasks.splice(i,1);

  }
  deleteimpTask(a:number){
    this.imp.splice(a,1);

  }
  doneTask(i:number){
    // this.done[i]=this.tasks[i];
    this.done.push(
      this.tasks[i]
    )
    this.tasks.splice(i,1);
    console.log(this.done);
    
  }
  doneimpTask(a:number){
    // this.done[i]=this.tasks[i];
    this.done.push(
      this.imp[a]
    )
    this.imp.splice(a,1);
    console.log(this.done); 

  }
  public compArr:any[]=this.done;

  deleteTaskdone(i:number){
    this.done.splice(i,1);
  } 
}

