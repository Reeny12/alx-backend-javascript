interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;  // Allows for additional attributes of any type
    }

    interface Directors extends Teacher {
    numberOfReports: number;
    }

    interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
    }

    printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
    };

    interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
