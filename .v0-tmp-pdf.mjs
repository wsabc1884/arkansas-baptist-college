import { generateFormPDF } from "./lib/generate-form-pdf.ts"
import fs from "fs"
const fields = {
  requesterName: "Marcus Waters", department: "IT Department", phone: "501-420-1200", email: "marcus.waters@arkansasbaptist.edu",
  eventTitle: "Website Test Event", eventType: "Meeting", eventDate: "2026-05-15",
  startTime: "00:00", endTime: "00:00", expectedAttendance: "25", admissionFee: "No", coSponsorship: "No",
  campusContactName: "John Smith", campusContactPhone: "501-555-9999",
  facilitySpace: "Administration Building", facilitySpecify: "",
  tablesQty: "10", chairsQty: "50", podium: "No", projector: "No", microphone: "Yes", stage: "No", floorTarp: "No",
  setupOther: "", custodialSupport: "No", securityNeeded: "No", technologySupport: "Yes", depositPaid: "No",
  insuranceProvider: "", requesterSignature: "Marcus Waters", signatureDate: "2026-05-01",
}
fs.writeFileSync("/tmp/fac.pdf", await generateFormPDF("facility-request", 1003, fields))
console.log("ok")
