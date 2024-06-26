#include<iostream>
using namespace std;
class student{
    string name;
    public:
    
    int age;
    bool gender;

    student(){
        cout<<"default constructor"<<endl;;
    }//default constructor

    student(string s, int a, int g){
        name = s;
        age = a;
        gender = g;
    }//parameterised constructor

    student(student &a){
        name = a.name;
        age = a.age;
        gender = a.gender;
    }//copy constructor

    void setName(string s){
        name = s;
    }

    void printInfo(){
        cout<<"Name : ";
        cout<<name<<endl;
        cout<<"Age : ";
        cout<<age<<endl;
        cout<<"Gender : ";
        cout<<gender<<endl;
    }

    ~student(){
        cout<<"Destructor"<<endl;
    }

    // operator overloading

    bool operator == (student &a){
        if(name==a.name && age==a.age && gender == a.gender){
            return true;
        }
        return false;
      
    }
};


int main(){

    // student a;
    // a.name = "atul";
    // a.age = 17;
    // a.gender = 1;

    // student arr[3];
    // for(int i=0; i<3; i++){
    //     string s;
    //     cout<<"Name : ";
    //     cin>>s;
    //     arr[i].setName(s);
    //     cout<<"Age : ";
    //     cin>>arr[i].age;
    //     cout<<"Gender : ";
    //     cin>>arr[i].gender;
    // }

    // for(int i=0; i<3; i++){
    //     arr[i].printInfo();
    // }

    student a("Atul", 18, 1);
    a.printInfo();

    student b;
    student c = a;

    if(c==a){
        cout<<"Same"<<endl;
    }
    else{
        cout<< "Not same"<<endl;
    }

    return 0;
}