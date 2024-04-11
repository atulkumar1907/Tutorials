#include<iostream>
#include<string>
using namespace std;

typedef struct student{
    string sub;
    string name;
    float marks;
    void show(){
        cout<<"Name : "<<this->name<<endl;
        cout<<"Subject : "<<this->sub<<endl;
        cout<<"Score : "<<this->marks<<endl;
    }
} st;


union money{
    int price;
    float cost;
    // string amt;
};
int main(){
    st a;
    a.sub = "science";
    a.name = "Aryan";
    a.marks = 34;
    a.show();
    
    union money b;
    b.price = 2000;
    cout<<b.price;

    
    enum meal m1 = breakfast;
    cout<<m1;
}