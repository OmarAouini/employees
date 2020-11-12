module.exports = mongoose => {
    const Employee = mongoose.model(
      "employee",
      mongoose.Schema(
        {
          name: String,
          surname: String,
          dob: Date,
          fiscal_code: String,
          address: {
            address_road: String,
            city: String,
            country: String,
            postalCode: Number
            },
          salaries: [
              {
                  salary: Number,
                  fromDate: Date,
                  toDate: Date
              }
          ],
          roles: [
              {
                  roleName: String,
                  fromDate: Date,
                  toDate: Date
              }
          ],
          departments: [
              {
                  id: String,
                  fromDate: Date,
                  toDate: Date
              }              
          ],

        },
        { timestamps: true }
      )
    );
    
    return Tutorial;
  };