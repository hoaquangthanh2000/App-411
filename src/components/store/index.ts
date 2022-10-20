import { useLocalStorage } from '@vueuse/core'
import {defineStore} from 'pinia'
import { v4 as uuidv4 } from 'uuid';
// import { useLocalStorage } from "@vueuse/core";

export interface persons{
    name:string
    id:string
}

export const useStore = defineStore("main",{
    state: () => ({
        person:{
            name:"",
            id:uuidv4()
        },
        // members: useLocalStorage("list", []),
        today: new Date,
        listPerson: useLocalStorage("list", [] as persons[])
    }),
    getters: {
        getPersons(): persons[]{
            return  this.listPerson
        },
    },
    actions: { 
        addPerson(){
            if(this.person.name ){
                this.listPerson.push({...this.person})
                this.person.name = ""
            }
        },
        deletePerson(person:persons){
            this.listPerson = this.listPerson.filter(member => member.id !== member.id)
            console.log(this.listPerson)
        }
    }
})