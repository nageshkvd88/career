import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUserTie, faGraduationCap, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Career = () => {
  const [step, setStep] = useState(1);
 const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedCollege, setSelectedCollege] = useState("");

  const [selectDepartment, setselectDepartment] = useState("");

  const collegeList = {
    Engineering: ["Computer Science and Engineering", "Electronics and Communication Engineering", "Aptitude & SoftSkills Trainer", "English(for Polytechnic College)"],
    Business: ["Business Analytics", "Digital Transformation"],
    Pharmacy: ["Pharmaceutical Chemistry", "Pharmacognosy"]
  };

  const handleCollegeChange = (e) => {
    const value = e.target.value;
    setSelectedCollege(value);
    setFormData((prev) => ({ ...prev, selcollege: value, selDep: "" }));
  }
  const today = new Date();
  const RandomId = () => {
  const pad = (num) => String(num).padStart(2, "0");
  const year = String(today.getFullYear()).slice(-2); // last 2 digits
  const month = pad(today.getMonth() + 1);            // months are 0-based
  const day = pad(today.getDate());
  const hour = pad(today.getHours());
  const minute = pad(today.getMinutes());
  const second = pad(today.getSeconds());
  return `${year}${month}${day}${hour}${minute}${second}`;
};
const id = RandomId();

  const [formData, setFormData] = useState({
    Applicationid : id,
    rectype: "Teaching",
    selcollege: "",
    selectpost: "",
    selDep: "",
   //personal
    fullname: "",
    email: "",
    phone: "",
    altphone: null,
    dob: "",
    address: "",
    city: "",
    dist: "",
    pincode: "",
    state: "",
    // education
    phdstatus: "",
    phdpassyear: "",
    phdawdDept: "",
    phdawdthesis: "",
    phdawduniversity: "",
    phdsubDept: "",
    phdsubthesis: "", 
    phdsubuniversity: "",
    phdregDept: "",
    phdregthesis: "",
    phdreguniversity: "",

    selectpg: "",
    branch_pg: "",
    branch_pg_ma: "",
    pg_other: "",
    specialization: "",
    CGPA: "",
    pgpass: "",
    institution_pg: "",
    university_pg:"",
    gaterank: "",
    selectug: "",
    branch_ug: "",
    ug_other: "",
    ugspecialization: "",
    ugCGPA: "",
    ugpass: "",
    institution_ug: "",
    university_ug: "",
    eamcet_rank: "",
    //Experience
    industrial_exp:"",
    academic_exp:"",
    total_exp:"",
    current_sal:"",
    expected_sal:"",
    //journal
    njournals_count:"",
    nconference_count:"",
    injournals_count:"",
    inconference_count:"",
    funded_projects:"",
    total_amount:"",
    books_published:"",
    patents:"",
    scopus_journals:"",
    sci_journals:"",
    upload_file:""
  });


  //Dob Validation
  const currentYear = new Date().getFullYear();
  const maxDate = today.toISOString().split("T")[0];
  const minDate = new Date();
  minDate.setFullYear(today.getFullYear() - 60);
  const minDateString = minDate.toISOString().split("T")[0];
  //Total Experience
    const industrialExp = parseInt(formData.industrial_exp, 10) || 0;
    const academicExp = parseInt(formData.academic_exp, 10) || 0;
    const totalExp = industrialExp + academicExp;

  // handle input change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };


  // validation
  const validateStep = () => {
    const isEmpty = (val) => !val || !val.trim();
    let newErrors = {};
    if (step === 1) {
        if (isEmpty(formData.rectype)) newErrors.rectype = "Name is required";
        if (isEmpty(formData.selcollege)) newErrors.selcollege = "Select College";
        if (isEmpty(formData.selectpost)) newErrors.selectpost = "Select Post";
        if (isEmpty(formData.selDep)) newErrors.selDep = "Select Department";
    }
    if (step === 2) {
        if (isEmpty(formData.fullname)) {
        newErrors.fullname = "Full Name is required";
        }
        else if (formData.fullname?.trim().length < 4) {
        newErrors.fullname = "Full Name must be at least 4 characters";
        }
        else if (!/^[A-Za-z.\-\s]+$/.test(formData.fullname?.trim())) {
        newErrors.fullname = "Full Name must contain only letters, spaces, dots, or hyphens";
        }

        if (isEmpty(formData.email)) {
        newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Valid email is required";
        }

        if (isEmpty(formData.phone)) {
        newErrors.phone = "Phone number is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = "Valid 10-digit phone is required";
        }

        if (isEmpty(formData.dob)) {
        newErrors.dob = "Date of Birth is required";
        }

        if (isEmpty(formData.address)) {
        newErrors.address = "Address is required";
        } else if (formData.address?.trim().length < 10) {
        newErrors.address = "Address must be at least 10 characters  ";
        }

        if (isEmpty(formData.city)) {
        newErrors.city = "city is required";
        } else if (formData.city?.trim().length < 3) {
        newErrors.city = "city must be at least 3 characters  ";
        }
        if (isEmpty(formData.dist)) {
        newErrors.dist = "dist is required";
        } else if (formData.dist?.trim().length < 3) {
        newErrors.dist = "dist must be at least 3 characters  ";
        }
        if (isEmpty(formData.state)) {
        newErrors.state = "state is required";
        } else if (formData.state?.trim().length < 2) {
        newErrors.state = "state must be at least 2 characters  ";
        }
        
        if (isEmpty(formData.pincode)) {
        newErrors.pincode = "pincode is required";
        } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
        newErrors.pincode = "Pincode must be a valid 6-digit number";
        }
      
     
      if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
      

    }
    if (step === 3) {
       if (isEmpty(formData.phdstatus)) newErrors.phdstatus = "Select Ph.D Status";
      
      if (formData.phdstatus === "Awarded") {
        if (isEmpty(formData.phdpassyear)) {
        newErrors.phdpassyear = "Year of Award is required";
        } else if (isNaN(formData.phdpassyear) || parseInt(formData.phdpassyear, 10) < 0) {
        newErrors.phdpassyear = "Year must be a positive number";
        } else if (!/^\d{4}$/.test(formData.phdpassyear)) {
        newErrors.phdpassyear = "Year must be exactly 4 digits";
        } else if (parseInt(formData.phdpassyear, 10) > currentYear) {
        newErrors.phdpassyear = "Future years are not allowed";
        } else if (parseInt(formData.phdpassyear, 10) < 1900) {
        newErrors.phdpassyear = "Enter a valid year after 1900";
        }

        // Department validation
        if (isEmpty(formData.phdawdDept)) {
        newErrors.phdawdDept = "Department is required";
        } else if (formData.phdawdDept.trim().length < 4) {
        newErrors.phdawdDept = "At least 4 characters required";
        }

        // Thesis Title validation
        if (isEmpty(formData.phdawdthesis)) {
        newErrors.phdawdthesis = "Thesis Title is required";
        } else if (formData.phdawdthesis.trim().length < 4) {
        newErrors.phdawdthesis = "At least 4 characters required";
        }

        // University validation
        if (isEmpty(formData.phdawduniversity)) {
        newErrors.phdawduniversity = "University is required";
        } else if (formData.phdawduniversity.trim().length < 2) {
        newErrors.phdawduniversity = "At least 2 characters required";
        }
      }
      
      if (formData.phdstatus === "Submitted") {
        if (isEmpty(formData.phdsubDept)) {
        newErrors.phdsubDept = "Department is required";
        } else if (formData.phdsubDept.trim().length < 4) {
        newErrors.phdsubDept = "At least 4 characters required";
        }

        if (isEmpty(formData.phdsubthesis)) {
        newErrors.phdsubthesis = "Thesis Title is required";
        } else if (formData.phdsubthesis.trim().length < 4) {
        newErrors.phdsubthesis = "At least 4 characters required";
        }

        if (isEmpty(formData.phdsubuniversity)) {
        newErrors.phdsubuniversity = "University is required";
        } else if (formData.phdsubuniversity.trim().length < 2) {
        newErrors.phdsubuniversity = "At least 2 characters required";
        }
      }

      // For Registered
      if (formData.phdstatus === "registered") {
        if (isEmpty(formData.phdregDept)) {
        newErrors.phdregDept = "Department is required";
        } else if (formData.phdregDept.trim().length < 4) {
        newErrors.phdregDept = "At least 4 characters required";
        }

        if (isEmpty(formData.phdregthesis)) {
        newErrors.phdregthesis = "Thesis Title is required";
        } else if (formData.phdregthesis.trim().length < 4) {
        newErrors.phdregthesis = "At least 4 characters required";
        }

        if (isEmpty(formData.phdreguniversity)) {
        newErrors.phdreguniversity = "University is required";
        } else if (formData.phdreguniversity.trim().length < 2) {
        newErrors.phdreguniversity = "At least 2 characters required";
        }
      }
      if (!formData.selectpg) {
        newErrors.selectpg = "Select PG Degree";
      }

      if (formData.selectpg === "M.Sc" && !formData.branch_pg) {
        newErrors.branch_pg = "Select Branch";
      }

      if (formData.selectpg === "MA" && !formData.branch_pg_ma) {
        newErrors.branch_pg_ma = "Select Branch";
      }

      if (formData.selectpg === "Other") {
        if (!formData.pg_other.trim()) {
          newErrors.pg_other = "Specify Other PG Degree";
        } else if (formData.pg_other.trim().length < 4) {
          newErrors.pg_other = "At least 4 characters required";
        }
      }

      if (!formData.specialization.trim()) {
        newErrors.specialization = "Specialization is required";
      } else if (formData.specialization.trim().length < 4) {
        newErrors.specialization = "At least 4 characters required";
      }else if (!/^[A-Za-z\s]+$/.test(formData.specialization.trim())) {
      newErrors.specialization = "Only letters and spaces are allowed";
      }

      if (isEmpty(formData.CGPA)) {
        newErrors.CGPA = "CGPA / Percentage is required";
      } else if (isNaN(formData.CGPA) || formData.CGPA < 0 || formData.CGPA > 100) {
        newErrors.CGPA = "Enter a valid number between 0 and 100";
      }

      if (!formData.pgpass) {
        newErrors.pgpass = "Year of Passing is required";
      } else if (isNaN(formData.pgpass) || parseInt(formData.pgpass, 10) < 0) {
        newErrors.pgpass = "Year must be a positive number";
      } else if (!/^\d{4}$/.test(formData.pgpass)) {
        newErrors.pgpass = "Year must be exactly 4 digits";
      } else if (parseInt(formData.pgpass, 10) > currentYear) {
        newErrors.pgpass = "Future years are not allowed";
      } else if (parseInt(formData.pgpass, 10) < 1940) {
        newErrors.pgpass = "Enter a valid year after 1940";
      }
      if (formData.pgpass && formData.phdpassyear) {
        const pgYear = parseInt(formData.pgpass, 10);
        const phdYear = parseInt(formData.phdpassyear, 10);

        if (!isNaN(pgYear) && !isNaN(phdYear) && pgYear > phdYear) {
        newErrors.pgpass = "PG Passing Year must be earlier than PhD Year";
        }
      }

      if (!formData.institution_pg.trim()) {
        newErrors.institution_pg = "Institution is required";
      } else if (formData.institution_pg.trim().length < 4) {
        newErrors.institution_pg = "At least 4 characters required";
      }

      if (!formData.university_pg.trim()) {
        newErrors.university_pg = "University is required";
      } else if (formData.university_pg.trim().length < 2) {
        newErrors.university_pg = "At least 2 characters required";
      }

      if (isEmpty(formData.gaterank)) {
        newErrors.gaterank = "GATE Rank / GPAT Rank is required";
      } else if (isNaN(formData.gaterank) || parseInt(formData.gaterank, 10) <= 0) {
        newErrors.gaterank = "Enter a valid positive number";
      }
      
      if (isEmpty(formData.selectug)) {
        newErrors.selectug = "Select UG Degree";
      }

      if (formData.selectug === "Other" && isEmpty(formData.ug_other)) {
        newErrors.ug_other = "Specify Other UG Degree";
      } else if (!isEmpty(formData.ug_other) && formData.ug_other.length < 4) {
        newErrors.ug_other = "At least 4 characters required";
      }

      if (isEmpty(formData.ugspecialization)) {
        newErrors.ugspecialization = "Specialization is required";
      } else if (formData.ugspecialization.length < 4) {
        newErrors.ugspecialization = "At least 4 characters required";
      }else if (!/^[A-Za-z\s]+$/.test(formData.ugspecialization.trim())) {
      newErrors.ugspecialization = "Only letters and spaces are allowed";
      }

      if (isEmpty(formData.ugCGPA)) {
        newErrors.ugCGPA = "CGPA / Percentage is required";
      } else if (isNaN(formData.ugCGPA) || formData.ugCGPA < 0 || formData.ugCGPA > 100) {
        newErrors.ugCGPA = "Enter a valid number between 0 and 100";
      }

      if (isEmpty(formData.ugpass)) {
        newErrors.ugpass = "Year of Passing is required";
      } else if (isNaN(formData.ugpass) || parseInt(formData.ugpass, 10) < 0) {
        newErrors.ugpass = "Year must be a positive number";
      } else if (!/^\d{4}$/.test(formData.ugpass)) {
        newErrors.ugpass = "Year must be exactly 4 digits";
      }  else if (parseInt(formData.ugpass, 10) > currentYear) {
        newErrors.ugpass = "Future years are not allowed";
      } else if (parseInt(formData.ugpass, 10) < 1940) {
        newErrors.ugpass = "Enter a valid year after 1940";
      }
      if (formData.ugpass && formData.pgpass) {
        const ugYear = parseInt(formData.ugpass, 10);
        const pgYear = parseInt(formData.pgpass, 10);
        if (ugYear >= pgYear) {
          newErrors.ugpass = "UG Passing Year must be earlier than PG Year";
        }
      }
      
      if (formData.ugpass && formData.phdpass) {
        const ugYear = parseInt(formData.ugpass, 10);
        const phdYear = parseInt(formData.phdpass, 10);
        if (ugYear >= phdYear) {
          newErrors.ugpass = "UG Passing Year must be earlier than PhD Year";
        }
      }

      if (isEmpty(formData.institution_ug)) {
        newErrors.institution_ug = "Institution is required";
      } else if (formData.institution_ug.length < 4) {
        newErrors.institution_ug = "At least 4 characters required";
      }

      if (isEmpty(formData.university_ug)) {
        newErrors.university_ug = "University is required";
      } else if (formData.university_ug.length < 2) {
        newErrors.university_ug = "At least 2 characters required";
      }

      if (isEmpty(formData.eamcet_rank)) {
        newErrors.eamcet_rank = "EAMCET / ECET Rank is required";
      } else if (isNaN(formData.eamcet_rank) || formData.eamcet_rank <= 0) {
        newErrors.eamcet_rank = "Enter a valid positive number";
      }
    }
    if(step === 4){
      if (isEmpty(formData.industrial_exp)) {
      newErrors.industrial_exp = "Industrial experience is required";
      }  else if (parseInt(formData.industrial_exp, 10) < 0) {
      newErrors.industrial_exp = "Negative values are not allowed";
      } else if (parseInt(formData.industrial_exp, 10) >= 50) {
      newErrors.industrial_exp = "Experience cannot exceed 50 years";
      }

      if (isEmpty(formData.academic_exp)) {
      newErrors.academic_exp = "Academic Experience is required";
      }  else if (parseInt(formData.academic_exp, 10) < 0) {
      newErrors.academic_exp = "Negative values are not allowed";
      } else if (parseInt(formData.academic_exp, 10) >= 50) {
      newErrors.academic_exp = "Experience cannot exceed 50 years";
      }

      if (totalExp <= 0) {
      newErrors.total_exp = "Total experience must be greater than 0";
      } else if (totalExp > 60) {
      newErrors.total_exp = "Total experience cannot exceed 60 years";
      }
      if (isEmpty(formData.current_sal)) {
      newErrors.current_sal = "Current Salary is required";
      } else if (!/^\d{4,}$/.test(formData.current_sal)) {
      newErrors.current_sal = "Salary must be at least 4 digits";
      }
      if (isEmpty(formData.expected_sal)) {
      newErrors.expected_sal = "Expected  Salary is required";
      } else if (!/^\d{4,}$/.test(formData.expected_sal)) {
      newErrors.expected_sal = "Salary must be at least 4 digits";
      }
    }
    if(step === 5){
      if (isEmpty(formData.njournals_count)) {
      newErrors.njournals_count = "Journal count is required";
      } else if (isNaN(formData.njournals_count)) {
      newErrors.njournals_count = "Journal count must be a number";
      } else if (parseInt(formData.njournals_count, 10) < 0) {
      newErrors.njournals_count = "Negative values are not allowed";
      }

      if (isEmpty(formData.nconference_count)) {
      newErrors.nconference_count = "Conference Papers is required";
      } else if (isNaN(formData.nconference_count)) {
      newErrors.nconference_count = "Conference Papers must be a number";
      } else if (parseInt(formData.nconference_count, 10) < 0) {
      newErrors.nconference_count = "Negative values are not allowed";
      }

      if (isEmpty(formData.injournals_count)) {
      newErrors.injournals_count = "International Journal Papers is required";
      } else if (isNaN(formData.injournals_count)) {
      newErrors.injournals_count = "International Journal Papers must be a number";
      } else if (parseInt(formData.injournals_count, 10) < 0) {
      newErrors.injournals_count = "Negative values are not allowed";
      }

      if (isEmpty(formData.inconference_count)) {
      newErrors.inconference_count = "International Conference Papers is required";
      } else if (isNaN(formData.inconference_count)) {
      newErrors.inconference_count = "International Conference Papers must be a number";
      } else if (parseInt(formData.inconference_count, 10) < 0) {
      newErrors.inconference_count = "Negative values are not allowed";
      }

      if (isEmpty(formData.funded_projects)) {
      newErrors.funded_projects = "Funded Projects count is required";
      } else if (isNaN(formData.funded_projects)) {
      newErrors.funded_projects = "Funded Projects count must be a number";
      } else if (parseInt(formData.funded_projects, 10) < 0) {
      newErrors.funded_projects = "Negative values are not allowed";
      }

      if (isEmpty(formData.total_amount)) {
      newErrors.total_amount = "Amount Sanctioned is required";
      } else if (isNaN(formData.total_amount)) {
      newErrors.total_amount = "Amount Sanctioned must be a number";
      } else if (parseInt(formData.total_amount, 10) < 0) {
      newErrors.total_amount = "Negative values are not allowed";
      }

      if (isEmpty(formData.books_published)) {
      newErrors.books_published = "published book count is required";
      } else if (isNaN(formData.books_published)) {
      newErrors.books_published = "published book count must be a number";
      } else if (parseInt(formData.books_published, 10) < 0) {
      newErrors.books_published = "Negative values are not allowed";
      }

      if (isEmpty(formData.patents)) {
      newErrors.patents = "patents count is required";
      } else if (isNaN(formData.patents)) {
      newErrors.patents = "patents count must be a number";
      } else if (parseInt(formData.patents, 10) < 0) {
      newErrors.patents = "Negative values are not allowed";
      }

      if (isEmpty(formData.scopus_journals)) {
      newErrors.scopus_journals = "scopus journals count is required";
      } else if (isNaN(formData.scopus_journals)) {
      newErrors.scopus_journals = "scopus journals count must be a number";
      } else if (parseInt(formData.scopus_journals, 10) < 0) {
      newErrors.scopus_journals = "Negative values are not allowed";
      }

      if (isEmpty(formData.sci_journals)) {
      newErrors.sci_journals = "sci journals count is required";
      } else if (isNaN(formData.sci_journals)) {
      newErrors.sci_journals = "sci journals count must be a number";
      } else if (parseInt(formData.sci_journals, 10) < 0) {
      newErrors.sci_journals = "Negative values are not allowed";
      }
      if (!formData.upload_file) {
        newErrors.upload_file = "File is required";
      } else {
        const allowedExtensions = ["pdf", "doc", "docx"];
        const fileName = formData.upload_file.name.toLowerCase();
        const fileExtension = fileName.split(".").pop();
        const fileSize = formData.upload_file.size; // in bytes
         const maxSize = 2 * 1024 * 1024; 

        if (!allowedExtensions.includes(fileExtension)) {
          newErrors.upload_file = "Only PDF, DOC, or DOCX files are allowed";
        } else if (fileSize > maxSize) {
          newErrors.upload_file = "File size must be below 2MB";
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };


  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log(formData);
      setIsSubmitted(true)
    }
  };



  return (
    <div className='vcard my-3'>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <div className='career__card'>
               {!isSubmitted ? (
                <>
              <div className='career__card--header'>
                <Row className='align-items-center'>
                  {step === 3 && (
                    <>
                      <Col xs={9} sm={10} lg={10}>
                      <h3>Step {step} / 5</h3>
                      <h3>Job Applying for</h3>
                      </Col>

                      <Col xs={3} sm={2} lg={2}>
                      <p className='icon-big'><FontAwesomeIcon icon={faUserTie} size="3x" /></p>
                      </Col>
                    </>
                    )}

                    {step === 2 && (
                      <>
                       <Col xs={9} sm={10} lg={10}>
                        <h3>Step {step} / 5</h3>
                        <h3>Personal Details</h3>
                        </Col>

                        <Col xs={3} sm={2} lg={2}>
                        <p className='icon-big'><FontAwesomeIcon icon={faKey} size="3x" /></p>
                        </Col>
                      </>
                      )}

                    {step === 1 && (
                       <>
                       <Col xs={9} sm={10} lg={10}>
                        <h3>Step {step} / 5</h3>
                        <h3>Educational Qualifications</h3>
                        </Col>

                        <Col xs={3} sm={2} lg={2}>
                        <p className='icon-big'><FontAwesomeIcon icon={faGraduationCap} size="3x" /></p>
                        </Col>
                      </>
                      )}

                    {step === 4 && (
                       <>
                       <Col xs={9} sm={10} lg={10}>
                        <h3>Step {step} / 5</h3>
                         <h3>Experience</h3>
                        </Col>

                        <Col xs={3} sm={2} lg={2}>
                        <p className='icon-big'><FontAwesomeIcon icon={faUserTie} size="3x" /></p>
                        </Col>
                      </>
                   )}

                    {step === 5 && (
                      <>
                       <Col xs={9} sm={10} lg={10}>
                        <h3>Step {step} / 5</h3>
                        <h3>Journals & Conferences</h3>
                         <h3>Upload Your Resume</h3>
                        </Col>

                        <Col xs={3} sm={2} lg={2}>
                        <p className='icon-big'><FontAwesomeIcon icon={faNewspaper} size="3x" /></p>
                     
                        </Col>
                      </>
                      )}
                </Row>
              </div>
              <div className='career__card--body'>
                <Form noValidate onSubmit={handleSubmit}>
                  {step === 1 && (
                    <Row className="mb-3">
                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Recruitment type</Form.Label>
                        <Form.Control required type="text" placeholder="Recruitment type" name="rectype" isInvalid={!!errors.rectype} value={formData.rectype} onChange={handleChange} isValid={formData.rectype && !errors.rectype} readOnly disabled />
                        {errors.rectype && <p className="text-danger mb-0">{errors.rectype}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Applying for </Form.Label>
                        <Form.Select name="selcollege" value={formData.selcollege} onChange={handleCollegeChange} isInvalid={!!errors.selcollege} isValid={formData.selcollege && !errors.selcollege}>
                          <option value=" ">Select</option>
                          {Object.keys(collegeList).map((collegeName) => (
                            <option key={collegeName} value={collegeName}>
                              School of {collegeName}
                            </option>
                          ))}
                        </Form.Select>
                        {errors.selcollege && <p className="text-danger mb-0">{errors.selcollege}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Post Type </Form.Label>
                        <Form.Select name="selectpost" value={formData.selectpost} onChange={handleChange} isInvalid={!!errors.selectpost} isValid={formData.selectpost && !errors.selectpost}>
                          <option value="">Select</option>
                          <option value="Professor">Professor</option>
                          <option value="Associate Professor">Associate Professor</option>
                          <option value="Assistant Professor">Assistant Professor</option>
                        </Form.Select>
                        {errors.selectpost && <p className="text-danger mb-0">{errors.selectpost}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Department  </Form.Label>
                        <Form.Select name="selDep" value={formData.selDep}
                          onChange={handleChange}
                          disabled={!selectedCollege}
                          isInvalid={!!errors.selDep} isValid={formData.selDep && !errors.selDep}>

                          <option value="">Select</option>
                          {selectedCollege &&
                            collegeList[selectedCollege].map((dep) => (
                              <option key={dep} value={dep}>
                                {dep}
                              </option>
                            ))}
                        </Form.Select>
                        {errors.selDep && <p className="text-danger mb-0">{errors.selDep}</p>}
                      </Form.Group>

                    </Row>
                  )}

                  {step === 2 && (
                    <Row>
                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control required type="text" placeholder="Full Name" name="fullname" isInvalid={!!errors.fullname} value={formData.fullname} onChange={handleChange} isValid={formData.fullname && !errors.fullname} />
                        {errors.fullname && <p className="text-danger mb-0">{errors.fullname}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="text" placeholder="Email" name="email" isInvalid={!!errors.email} value={formData.email} onChange={handleChange} isValid={formData.email && !errors.email} />
                        {errors.email && <p className="text-danger mb-0">{errors.email}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control required type="mobile" placeholder="Mobile Number" name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} isValid={formData.phone && !errors.phone} maxLength={10} />
                        {errors.phone && <p className="text-danger mb-0">{errors.phone}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3" >
                        <Form.Label>Alternate Mobile Number</Form.Label>
                        <Form.Control type="mobile" placeholder="Last name" name="altphone" value={formData.altphone} onChange={handleChange} isInvalid={!!errors.altphone} isValid={formData.altphone && !errors.altphone} maxLength={10} />
                        {errors.altphone && <p className="text-danger mb-0">{errors.altphone}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3" >
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control required type="Date" placeholder="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} isInvalid={!!errors.dob} isValid={formData.dob && !errors.dob} min={minDateString} max={maxDate} />
                        {errors.dob && <p className="text-danger mb-0">{errors.dob}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Address For correspondence</Form.Label>
                        <Form.Control required as="textarea" rows={3} placeholder="Address..." name="address" isInvalid={!!errors.address} value={formData.address} onChange={handleChange} isValid={formData.address && !errors.address} />
                        {errors.address && <p className="text-danger mb-0">{errors.address}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>City </Form.Label>
                        <Form.Control required type="text" placeholder="City..." name="city" isInvalid={!!errors.city} value={formData.city} onChange={handleChange} isValid={formData.city && !errors.city} />
                        {errors.city && <p className="text-danger mb-0">{errors.city}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>District </Form.Label>
                        <Form.Control required type="text" placeholder="District..." name="dist" isInvalid={!!errors.dist} value={formData.dist} onChange={handleChange} isValid={formData.dist && !errors.dist} />
                        {errors.dist && <p className="text-danger mb-0">{errors.dist}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Pincode  </Form.Label>
                        <Form.Control required type="number" placeholder="Pincode..." name="pincode" isInvalid={!!errors.pincode} value={formData.pincode} onChange={handleChange} isValid={formData.pincode && !errors.pincode} />
                        {errors.pincode && <p className="text-danger mb-0">{errors.pincode}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>State   </Form.Label>
                        <Form.Control required type="text" placeholder="State..." name="state" isInvalid={!!errors.state} value={formData.state} onChange={handleChange} isValid={formData.state && !errors.state} />
                        {errors.state && <p className="text-danger mb-0">{errors.state}</p>}
                      </Form.Group>

                    </Row>
                  )}

                  {step === 3 && (
                    <Row>
                      <Form.Group as={Col} sm="12" className="mb-3" >
                        <Form.Label>Ph.D Status?</Form.Label>
                        <Form.Select name="phdstatus" value={formData.phdstatus} onChange={handleChange} isInvalid={!!errors.phdstatus} isValid={formData.phdstatus && !errors.phdstatus}>
                          <option>select </option>
                          <option value="Awarded" >Awarded</option>
                          <option value="Submitted" >Submitted</option>
                          <option value="registered">Registered</option>
                          <option value="not_registered">Not Registered</option>
                        </Form.Select>
                        {errors.phdstatus && <p className="text-danger mb-0">{errors.phdstatus}</p>}
                      </Form.Group>
                      {formData.phdstatus === "Awarded" && (
                        <>
                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>Year of Award(Ph.D)</Form.Label>
                            <Form.Control required type="number" placeholder="Year of Passing ..." name="phdpassyear" isInvalid={!!errors.phdpassyear} value={formData.phdpassyear} onChange={handleChange} isValid={formData.phdpassyear && !errors.phdpassyear} />
                            {errors.phdpassyear && <p className="text-danger mb-0">{errors.phdpassyear}</p>}
                          </Form.Group>

                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>In Department of</Form.Label>
                            <Form.Control required type="text" placeholder="Department of ..." name="phdawdDept" isInvalid={!!errors.phdawdDept} value={formData.phdawdDept} onChange={handleChange} isValid={formData.phdawdDept && !errors.phdawdDept} />
                            {errors.phdawdDept && <p className="text-danger mb-0">{errors.phdawdDept}</p>}
                          </Form.Group>

                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>Thesis Title</Form.Label>
                            <Form.Control required type="text" placeholder="Thesis Title..." name="phdawdthesis" isInvalid={!!errors.phdawdthesis} value={formData.phdawdthesis} onChange={handleChange} isValid={formData.phdawdthesis && !errors.phdawdthesis} />
                            {errors.phdawdthesis && <p className="text-danger mb-0">{errors.phdawdthesis}</p>}
                          </Form.Group>

                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>University</Form.Label>
                            <Form.Control required type="text" placeholder="University..." name="phdawduniversity" isInvalid={!!errors.phdawduniversity} value={formData.phdawduniversity} onChange={handleChange} isValid={formData.phdawduniversity && !errors.phdawduniversity} />
                            {errors.phdawduniversity && <p className="text-danger mb-0">{errors.phdawduniversity}</p>}
                          </Form.Group>
                        </>
                      )}
                      {formData.phdstatus === "Submitted" && (
                        <>
                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>In Department of</Form.Label>
                            <Form.Control required type="text" placeholder="Department of ..." name="phdsubDept" isInvalid={!!errors.phdsubDept} value={formData.phdsubDept} onChange={handleChange} isValid={formData.phdsubDept && !errors.phdsubDept} />
                            {errors.phdsubDept && <p className="text-danger mb-0">{errors.phdsubDept}</p>}
                          </Form.Group>

                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>Thesis Title</Form.Label>
                            <Form.Control required type="text" placeholder="Thesis Title..." name="phdsubthesis" isInvalid={!!errors.phdsubthesis} value={formData.phdsubthesis} onChange={handleChange} isValid={formData.phdsubthesis && !errors.phdsubthesis} />
                            {errors.phdsubthesis && <p className="text-danger mb-0">{errors.phdsubthesis}</p>}
                          </Form.Group>

                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>University</Form.Label>
                            <Form.Control required type="text" placeholder="University..." name="phdsubuniversity" isInvalid={!!errors.phdsubuniversity} value={formData.phdsubuniversity} onChange={handleChange} isValid={formData.phdsubuniversity && !errors.phdsubuniversity} />
                            {errors.phdsubuniversity && <p className="text-danger mb-0">{errors.phdsubuniversity}</p>}
                          </Form.Group>
                        </>
                      )}

                      {formData.phdstatus === "registered" && (
                        <>
                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>In Department of</Form.Label>
                            <Form.Control required type="text" placeholder="Department of ..." name="phdregDept" isInvalid={!!errors.phdregDept} value={formData.phdregDept} onChange={handleChange} isValid={formData.phdregDept && !errors.phdregDept} />
                            {errors.phdregDept && <p className="text-danger mb-0">{errors.phdregDept}</p>}
                          </Form.Group>

                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>Thesis Title</Form.Label>
                            <Form.Control required type="text" placeholder="Thesis Title..." name="phdregthesis" isInvalid={!!errors.phdregthesis} value={formData.phdregthesis} onChange={handleChange} isValid={formData.phdregthesis && !errors.phdregthesis} />
                            {errors.phdregthesis && <p className="text-danger mb-0">{errors.phdregthesis}</p>}
                          </Form.Group>

                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>University</Form.Label>
                            <Form.Control required type="text" placeholder="University..." name="phdreguniversity" isInvalid={!!errors.phdreguniversity} value={formData.phdreguniversity} onChange={handleChange} isValid={formData.phdreguniversity && !errors.phdreguniversity} />
                            {errors.phdreguniversity && <p className="text-danger mb-0">{errors.phdreguniversity}</p>}
                          </Form.Group>
                        </>
                      )}

                      <Form.Group as={Col} sm="12" className="mb-3" >
                        <Form.Label>PG Details </Form.Label>
                        <Form.Select name="selectpg" value={formData.selectpg} onChange={handleChange} isInvalid={!!errors.selectpg} isValid={formData.selectpg && !errors.selectpg}>
                          <option value="">Select</option>
                          <option value="M.Tech">M.Tech</option>
                          <option value="ME">ME</option>
                          <option value="M.Pharma">M.Pharma</option>
                          <option value="M.Sc">M.Sc</option>
                          <option value="MA">MA</option>
                          <option value="Other">Other (Specify)</option>
                        </Form.Select>
                        {errors.selectpg && <p className="text-danger mb-0">{errors.selectpg}</p>}
                      </Form.Group>

                      {formData.selectpg === "M.Sc" && (
                        <>
                          <Form.Group as={Col} sm="12" className="mb-3" >
                            <Form.Label>Select Branch</Form.Label>
                            <Form.Select name="branch_pg" value={formData.branch_pg || " "} onChange={handleChange} isInvalid={!!errors.branch_pg} isValid={formData.branch_pg && !errors.branch_pg}>
                              <option value="">Select Branch</option>
                              <option value="Mathematics">Mathematics</option>
                              <option value="Physics">Physics</option>
                              <option value="Chemistry">Chemistry</option>
                              <option value="Environmental Studies">Environmental Studies</option>
                            </Form.Select>
                            {errors.branch_pg && <p className="text-danger mb-0">{errors.branch_pg}</p>}
                          </Form.Group>
                        </>
                      )}

                      {formData.selectpg === "MA" && (
                        <>
                          <Form.Group as={Col} sm="12" className="mb-3" >
                            <Form.Label>Select Branch </Form.Label>
                            <Form.Select name="branch_pg_ma" value={formData.branch_pg_ma} onChange={handleChange} isInvalid={!!errors.branch_pg_ma} isValid={formData.branch_pg_ma && !errors.branch_pg_ma}>
                              <option value="">Select Branch</option>
                              <option value="English">English</option>
                              <option value="Other">Other</option>
                            </Form.Select>
                            {errors.branch_pg_ma && <p className="text-danger mb-0">{errors.branch_pg_ma}</p>}
                          </Form.Group>
                        </>
                      )}
                      {formData.selectpg === "Other" && (
                        <>
                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>Other PG Details Specify</Form.Label>
                            <Form.Control required type="text" placeholder="Specify..." name="pg_other" isInvalid={!!errors.pg_other} value={formData.pg_other} onChange={handleChange} isValid={formData.pg_other && !errors.pg_other} />
                            {errors.pg_other && <p className="text-danger mb-0">{errors.pg_other}</p>}
                          </Form.Group>
                        </>
                      )}

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control required type="text" placeholder="Specialization" name="specialization" isInvalid={!!errors.specialization} value={formData.specialization} onChange={handleChange} isValid={formData.specialization && !errors.specialization} />
                        {errors.specialization && <p className="text-danger mb-0">{errors.specialization}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Percentage / CGPA </Form.Label>
                        <Form.Control required type="number" placeholder="Percentage / CGPA ..." name="CGPA" isInvalid={!!errors.CGPA} value={formData.CGPA} onChange={handleChange} isValid={formData.CGPA && !errors.CGPA} />
                        {errors.CGPA && <p className="text-danger mb-0">{errors.CGPA}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Year of Passing</Form.Label>
                        <Form.Control required type="number" placeholder="Year of Passing ..." name="pgpass" isInvalid={!!errors.pgpass} value={formData.pgpass} onChange={handleChange} isValid={formData.pgpass && !errors.pgpass} />
                        {errors.pgpass && <p className="text-danger mb-0">{errors.pgpass}</p>}
                      </Form.Group>


                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Institution</Form.Label>
                        <Form.Control required type="text" placeholder="Institution ..." name="institution_pg" isInvalid={!!errors.institution_pg} value={formData.institution_pg} onChange={handleChange} isValid={formData.institution_pg && !errors.institution_pg} />
                        {errors.institution_pg && <p className="text-danger mb-0">{errors.institution_pg}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>University</Form.Label>
                        <Form.Control required type="text" placeholder="University..." name="university_pg" isInvalid={!!errors.university_pg} value={formData.university_pg} onChange={handleChange} isValid={formData.university_pg && !errors.university_pg} />
                        {errors.university_pg && <p className="text-danger mb-0">{errors.university_pg}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>GATE Rank / GPAT Rank</Form.Label>
                        <Form.Control required type="number" placeholder="GATE Rank / GPAT Rank..." name="gaterank" isInvalid={!!errors.gaterank} value={formData.gaterank} onChange={handleChange} isValid={formData.gaterank && !errors.gaterank} />
                        {errors.gaterank && <p className="text-danger mb-0">{errors.gaterank}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3" >
                        <Form.Label>Select UG</Form.Label>
                        <Form.Select name="selectug" value={formData.selectug} onChange={handleChange} isInvalid={!!errors.selectug} isValid={formData.selectug && !errors.selectug}>
                          <option value="">Select</option>
                          <option value="BA">BA</option>
                          <option value="B.Com">B.Com</option>
                          <option value="B.Tech">B.Tech</option>
                          <option value="BE">BE</option>
                          <option value="B.Pharm">B.Pharm</option>
                          <option value="B.Sc">B.Sc</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                        {errors.selectug && <p className="text-danger mb-0">{errors.selectug}</p>}
                      </Form.Group>

                      {formData.selectug === "Other" && (
                        <>
                          <Form.Group as={Col} sm="12" className="mb-3">
                            <Form.Label>Other UG Details Specify</Form.Label>
                            <Form.Control required type="text" placeholder="Specify..." name="ug_other" isInvalid={!!errors.ug_other} value={formData.ug_other} onChange={handleChange} isValid={formData.ug_other && !errors.ug_other} />
                            {errors.ug_other && <p className="text-danger mb-0">{errors.ug_other}</p>}
                          </Form.Group>
                        </>
                      )}

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control required type="text" placeholder="Specialization" name="ugspecialization" isInvalid={!!errors.ugspecialization} value={formData.ugspecialization} onChange={handleChange} isValid={formData.ugspecialization && !errors.ugspecialization} />
                        {errors.ugspecialization && <p className="text-danger mb-0">{errors.ugspecialization}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Percentage / CGPA </Form.Label>
                        <Form.Control required type="number" placeholder="Percentage / CGPA ..." name="ugCGPA" isInvalid={!!errors.ugCGPA} value={formData.ugCGPA} onChange={handleChange} isValid={formData.ugCGPA && !errors.ugCGPA} />
                        {errors.ugCGPA && <p className="text-danger mb-0">{errors.ugCGPA}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Year of Passing</Form.Label>
                        <Form.Control required type="number" placeholder="Year of Passing ..." name="ugpass" isInvalid={!!errors.ugpass} value={formData.ugpass} onChange={handleChange} isValid={formData.ugpass && !errors.ugpass} />
                        {errors.ugpass && <p className="text-danger mb-0">{errors.ugpass}</p>}
                      </Form.Group>


                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>Institution</Form.Label>
                        <Form.Control required type="text" placeholder="Institution ..." name="institution_ug" isInvalid={!!errors.institution_ug} value={formData.institution_ug} onChange={handleChange} isValid={formData.institution_ug && !errors.institution_ug} />
                        {errors.institution_ug && <p className="text-danger mb-0">{errors.institution_ug}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>University</Form.Label>
                        <Form.Control required type="text" placeholder="University..." name="university_ug" isInvalid={!!errors.university_ug} value={formData.university_ug} onChange={handleChange} isValid={formData.university_ug && !errors.university_ug} />
                        {errors.university_ug && <p className="text-danger mb-0">{errors.university_ug}</p>}
                      </Form.Group>

                      <Form.Group as={Col} sm="12" className="mb-3">
                        <Form.Label>EAMCET / ECET Rank</Form.Label>
                        <Form.Control required type="number" placeholder="GATE Rank / GPAT Rank..." name="eamcet_rank" isInvalid={!!errors.eamcet_rank} value={formData.eamcet_rank} onChange={handleChange} isValid={formData.eamcet_rank && !errors.eamcet_rank} />
                        {errors.eamcet_rank && <p className="text-danger mb-0">{errors.eamcet_rank}</p>}
                      </Form.Group>

                    </Row>
                  )}

                  {step === 4 && (
                    <>
                      <Row>
                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>Industrial Experience</Form.Label>
                          <Form.Control required type="number" placeholder="Industrial Experience..." name="industrial_exp" isInvalid={!!errors.industrial_exp} value={formData.industrial_exp} onChange={handleChange} isValid={formData.industrial_exp && !errors.industrial_exp} />
                          {errors.industrial_exp && <p className="text-danger mb-0">{errors.industrial_exp}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>Academic Experience  </Form.Label>
                          <Form.Control required type="number" placeholder="Academic Experience" name="academic_exp" isInvalid={!!errors.academic_exp} value={formData.academic_exp} onChange={handleChange} isValid={formData.academic_exp && !errors.academic_exp} />
                          {errors.academic_exp && <p className="text-danger mb-0">{errors.academic_exp}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>Total Experience </Form.Label>
                          <Form.Control required readOnly type="number" placeholder="Total Experience" name="total_exp" isInvalid={!!errors.total_exp} value={totalExp} onChange={handleChange} isValid={formData.total_exp && !errors.total_exp} />
                          {errors.total_exp && <p className="text-danger mb-0">{errors.total_exp}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>Current Salary  </Form.Label>
                          <Form.Control required type="number" placeholder="Current Salary" name="current_sal" isInvalid={!!errors.current_sal} value={formData.current_sal} onChange={handleChange} isValid={formData.current_sal && !errors.current_sal} />
                          {errors.current_sal && <p className="text-danger mb-0">{errors.current_sal}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>Expected Salary</Form.Label>
                          <Form.Control required type="number" placeholder="Expected Salary" name="expected_sal" isInvalid={!!errors.expected_sal} value={formData.expected_sal} onChange={handleChange} isValid={formData.expected_sal && !errors.expected_sal} />
                          {errors.expected_sal && <p className="text-danger mb-0">{errors.expected_sal}</p>}
                        </Form.Group>

                      </Row>
                    </>
                  )}

                  {step === 5 && (
                    <>
                      <Row>
                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>No. of National Journal Papers Published</Form.Label>
                          <Form.Control required type="number" placeholder="No. of National Journal Papers Published.." name="njournals_count" isInvalid={!!errors.njournals_count} value={formData.njournals_count} onChange={handleChange} isValid={formData.njournals_count && !errors.njournals_count} />
                          {errors.njournals_count && <p className="text-danger mb-0">{errors.njournals_count}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>No. of National Conference Papers Published</Form.Label>
                          <Form.Control required type="number" placeholder="No. of National Conference Papers Published" name="nconference_count" isInvalid={!!errors.nconference_count} value={formData.nconference_count} onChange={handleChange} isValid={formData.nconference_count && !errors.nconference_count} />
                          {errors.nconference_count && <p className="text-danger mb-0">{errors.nconference_count}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>Total No.of International Journal Papers Published </Form.Label>
                          <Form.Control required type="number" placeholder="Total No.of International Journal Papers Published" name="injournals_count" isInvalid={!!errors.injournals_count} value={formData.injournals_count} onChange={handleChange} isValid={formData.injournals_count && !errors.injournals_count} />
                          {errors.injournals_count && <p className="text-danger mb-0">{errors.injournals_count}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>No. of International Conference Papers Published</Form.Label>
                          <Form.Control required type="number" placeholder="No. of International Conference Papers Published" name="inconference_count" isInvalid={!!errors.inconference_count} value={formData.inconference_count} onChange={handleChange} isValid={formData.inconference_count && !errors.inconference_count} />
                          {errors.inconference_count && <p className="text-danger mb-0">{errors.inconference_count}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>No. of Funded Projects</Form.Label>
                          <Form.Control required type="number" placeholder="No. of Funded Projects" name="funded_projects" isInvalid={!!errors.funded_projects} value={formData.funded_projects} onChange={handleChange} isValid={formData.funded_projects && !errors.funded_projects} />
                          {errors.funded_projects && <p className="text-danger mb-0">{errors.funded_projects}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>Total Amount Sanctioned</Form.Label>
                          <Form.Control required type="number" placeholder="Total Amount Sanctioned" name="total_amount" isInvalid={!!errors.total_amount} value={formData.total_amount} onChange={handleChange} isValid={formData.total_amount && !errors.total_amount} />
                          {errors.total_amount && <p className="text-danger mb-0">{errors.total_amount}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>No. of books and book chapters published</Form.Label>
                          <Form.Control required type="number" placeholder="No. of books and book chapters published" name="books_published" isInvalid={!!errors.books_published} value={formData.books_published} onChange={handleChange} isValid={formData.books_published && !errors.books_published} />
                          {errors.books_published && <p className="text-danger mb-0">{errors.books_published}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>No. of Patents</Form.Label>
                          <Form.Control required type="number" placeholder="No. of Patents" name="patents" isInvalid={!!errors.patents} value={formData.patents} onChange={handleChange} isValid={formData.patents && !errors.patents} />
                          {errors.patents && <p className="text-danger mb-0">{errors.patents}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>No.of Scopus Journals</Form.Label>
                          <Form.Control required type="number" placeholder="No.of Scopus Journals" name="scopus_journals" isInvalid={!!errors.scopus_journals} value={formData.scopus_journals} onChange={handleChange} isValid={formData.scopus_journals && !errors.scopus_journals} />
                          {errors.scopus_journals && <p className="text-danger mb-0">{errors.scopus_journals}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>No.of SCI Journals</Form.Label>
                          <Form.Control required type="number" placeholder="No.of SCI Journals" name="sci_journals" isInvalid={!!errors.sci_journals} value={formData.sci_journals} onChange={handleChange} isValid={formData.sci_journals && !errors.sci_journals} />
                          {errors.sci_journals && <p className="text-danger mb-0">{errors.sci_journals}</p>}
                        </Form.Group>

                        <Form.Group as={Col} sm="12" className="mb-3">
                          <Form.Label>Upload Resume</Form.Label>
                          <Form.Control required
                            type="file"
                            name="upload_file"
                            onChange={handleChange}
                            isInvalid={!!errors.upload_file}
                            accept=".pdf,.docx" // restrict file chooser
                          />
                           {errors.upload_file && <p className="text-danger mb-0">{errors.upload_file}</p>}
                        </Form.Group>
                      </Row>
                    </>
                  )}

                  <>
                  <Row className="justify-content-between">
                    <Col xs={8} md={6} lg={4} xl={4}>
                    {step > 1 && <Button type="button" onClick={prevStep} className='btn btn-md btn-primary me-2 w-100'>Back</Button>}
                    </Col>
                      <Col xs={8} md={6} lg={4} xl={4}>
                    {step < 5 && <Button type="button" onClick={nextStep} className='btn btn-md btn-primary w-100'>Next</Button>}
                    {step === 5 && <Button type="submit" className='btn btn-md btn-primary w-100'>Submit</Button>}
                    </Col>
                  </Row>
                  </>
                </Form>
              </div>
              </>
               ):(<>
               <div className="career__card--successWrap">
               <h2 className="success_msg mb-2">Your Details Uploaded Successfully</h2>
                <p>Our Hr Team will Get Back to you.</p>
                <h3 className="success_msg mt-5">Thanks</h3>
               </div>
               </>)}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Career
