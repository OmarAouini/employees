module.exports = mongoose => {
    const Department = mongoose.model(
      "department",
      mongoose.Schema(
        {
          id: String,
          name: String,
          num_of_employees: Number
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };