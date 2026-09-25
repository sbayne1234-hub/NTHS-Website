// =========================
// MEMBERSHIP PAGE
// =========================

const checkEligibility = document.getElementById("checkEligibility");
if (checkEligibility) {
    checkEligibility.addEventListener("click", function() {
        const gpa = parseFloat(document.getElementById("gpa").value);
        const certification = document.getElementById("certification").value;
        const cteClasses = parseInt(document.getElementById("cteClasses").value);
        const result = document.getElementById("eligibilityResult");

        if (isNaN(gpa) || certification === "" || isNaN(cteClasses)) {
            result.innerHTML = `
                <h3>Please complete all fields</h3>
                <p>
                    Enter your GPA, certification status, and number of completed CTE classes.
                </p>
            `;
            return;
        }
        const gpaMet = gpa >= 3.0;
        const certificationMet = certification === "yes";
        const classesMet = cteClasses >=2;
        result.innerHTML = `
            <h3>Your Results</h3>
            <div class="requirement-result ${
                gpaMet ? "requirement-met" : "requirement-not-met"
            }">
                ${gpaMet ? "✓" : "✗"}
                Academic Excellence -
                ${gpaMet ? "Requirement met" : "Requirement not met"}
            </div>
            <div class="requirement-result ${
                certificationMet ? "requirement-met" : "requirement-not-met"
            }">
                ${certificationMet ? "✓" : "✗"}
                Technical Achievement -
                ${certificationMet ? "Requirement met" : "Requirement not met"}
            </div>
            <div class="requirement-result ${
                classesMet ? "requirement-met" : "requirement-not-met"
            }">
                ${classesMet ? "✓" : "✗"}
                Academic Commitment -
                ${classesMet ? "Requirement met" : "Requirement not met"}
            </div>
            <p style="margin-top: 20px;">
                This checker is for informational purposes.
                Please speak with your chapter advisor to confirm your eligibility.
            </p>
        `;
    });
}