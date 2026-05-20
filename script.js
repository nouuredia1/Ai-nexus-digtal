function toggleChat(){
  const chat = document.getElementById("chatWidget");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}
function addMsg(text, cls){
  const body = document.getElementById("chatBody");
  const div = document.createElement("div");
  div.className = cls;
  div.textContent = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}
function botReply(message){
  const m = message.toLowerCase();
  if(m.includes("service") || m.includes("خدمات")) return "We offer AI chatbots, automation, digital marketing, analytics, website optimization, OpenAI API concepts, and cybersecurity-aware AI solutions.";
  if(m.includes("price") || m.includes("cost") || m.includes("سعر")) return "Pricing depends on the project. Use the Start a Project form and include your goals so we can suggest a suitable package.";
  if(m.includes("contact") || m.includes("email") || m.includes("تواصل")) return "Please use the Start a Project form on the website to send your details and project message.";
  if(m.includes("project") || m.includes("start")) return "Go to the Start a Project section and fill in your name, email, phone number, project type, and message.";
  if(m.includes("chatbot") || m.includes("bot")) return "We can add website chatbots for customer support, lead capture, FAQ answers, and AI assistant concepts.";
  if(m.includes("automation") || m.includes("أتمتة")) return "AI automation can help reduce repetitive work, generate reports, support customers, and improve business workflows.";
  if(m.includes("marketing")) return "AI marketing can help with content creation, campaign ideas, audience insights, and performance analysis.";
  if(m.includes("security") || m.includes("cyber")) return "AI cybersecurity concepts can support monitoring, risk awareness, safer workflows, and digital protection.";
  return "Thanks for your message. AI Nexus Digital can help with automation, chatbots, analytics, marketing, cybersecurity, and smart website systems.";
}
function sendMessage(){
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if(!text) return;
  addMsg(text, "user-msg");
  input.value = "";
  setTimeout(()=> addMsg(botReply(text), "bot-msg"), 350);
}
function quickAsk(type){
  addMsg(type, "user-msg");
  setTimeout(()=> addMsg(botReply(type), "bot-msg"), 300);
}

document.getElementById("projectForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  this.reset();
});
