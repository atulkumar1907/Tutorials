#include<iostream>
using namespace std;

class student{
    // PROTECTED: accessible only in derived class

    // PRIVATE: accessible only in the class
    private:
    string name;
    // PUBLIC: accessible outside the class
    public:
    int age;
    bool Score;
    // DEFAULT CONTSTRUCTOR
    student(){
        cout<<"constructor called"<<endl;
    }
    //PARAMETERISED CONSTRUCTOR
    student(int a, bool g, string s=""){
        age = a;
        name = s;
        Score = g;
    }
    // COPY CONSTRUCTOR
    student(const student &a){
        name = a.name;
        age = a.age;
        Score =  Score;
    }

    void details();
    ~student(){
        cout<<"Destructor Called"<<endl;
    }
};

void student::details(){
        cout<<"Name : "<<this->name<<endl;
        cout<<"Age : "<<this->age<<endl;
        cout<<"Gender : "<<this->Score<<endl;
}

// int main(){
//     student a;
//     // a.name = 'n'; not accessible because of private keyword

//     a.age = 12;
//     a.Score = 0;
//     cout<<a.age<<endl;

//     student s1( 23, 0, "Rohan");
//     cout<<s1.age<<" "<<s1.Score<<endl;

//     student copy(s1);
//     cout<<copy.age<<" "<<copy.Score<<endl;

//     s1.details();

// }