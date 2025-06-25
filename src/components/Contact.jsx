'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import ActionButton from './ActionButton';

const Contact = ({ language = "pt" }) => {
  const controls = useAnimation();
  // Detecta quando a seção entra na visualização para disparar as animações uma vez.
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Credenciais do EmailJS para envio de formulários.
  const serviceId = "service_wk64lqt";
  const templateId = "template_nh38c9c";
  const publicKey = "VMnVTWjFgDZujPudf";

  // Estado do formulário e feedback de status (enviando, sucesso, erro).
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState(""); // Gerencia o estado da submissão: "", "sending", "success", "error".
  const [errors, setErrors] = useState({}); // Armazena erros de validação do formulário.

  // Inicia a animação da seção quando ela entra na visualização.
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Controla o overflow do body para desabilitar a rolagem quando o modal de status está ativo.
  useEffect(() => {
    if (status === "success" || status === "error") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [status]);

  // Variantes de animação para o container e itens.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    }
  };

  // Formata o número de telefone para um padrão comum (ex: (XX) XXXX-XXXX).
  const formatPhoneNumber = (phoneNumber) => {
    phoneNumber = phoneNumber.replace(/\D/g, ""); // Remove não-dígitos
    if (phoneNumber.length > 11) phoneNumber = phoneNumber.slice(0, 11);

    return phoneNumber.length <= 10
      ? phoneNumber.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
      : phoneNumber.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  // Lida com a mudança nos inputs do formulário e limpa erros se o campo for alterado.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpa o erro do campo assim que o usuário começa a digitar.
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Valida os campos do formulário e define mensagens de erro se necessário.
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = translations[language].errors.required;
    if (!formData.email.trim()) newErrors.email = translations[language].errors.required;
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = translations[language].errors.required;
    if (!formData.subject.trim()) newErrors.subject = translations[language].errors.required;
    if (!formData.message.trim()) newErrors.message = translations[language].errors.required;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros.
  };

  // Lida com o envio do formulário, validação e integração com EmailJS.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Aborta se a validação falhar.

    setStatus("sending"); // Indica que o envio está em andamento.

    const formattedPhone = formatPhoneNumber(formData.phoneNumber);

    const templateParams = {
      user_name: formData.fullName,
      user_email: formData.email,
      user_phone: formattedPhone,
      user_subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        setStatus("success"); // Define o status para sucesso.
        // Limpa o formulário após o envio bem-sucedido.
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: ""
        });
      },
      (error) => {
        console.error("Error sending email: ", error.text);
        setStatus("error"); // Define o status para erro.
      }
    );
  };

  // Conteúdo textual da seção, separado por idioma para internacionalização.
  const translations = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Interessado em trabalhar juntos? Vamos conversar sobre suas necessidades de dados.",
      contactTitle: "Informações de Contato",
      contactItems: [
        {
          icon: <Mail className="w-5 h-5 text-yellow-400 mt-1 mr-4" />,
          title: "Email",
          content: "lucastech216@gmail.com"
        },
        {
          icon: <Phone className="w-5 h-5 text-yellow-400 mt-1 mr-4" />,
          title: "Telefone",
          content: "+55 11 98878-4991"
        },
        {
          icon: <MapPin className="w-5 h-5 text-yellow-400 mt-1 mr-4" />,
          title: "Localização",
          content: "Brasil"
        }
      ],
      formLabels: {
        fullName: "Nome Completo",
        phone: "Telefone",
        email: "E-mail",
        subject: "Assunto",
        message: "Sua Mensagem",
        submit: "Enviar Mensagem",
        sending: "Enviando..."
      },
      placeholders: {
        fullName: "Seu nome completo",
        phone: "(11) 98765-4321",
        email: "email@exemplo.com",
        subject: "Qual é o assunto?",
        message: "Escreva sua mensagem aqui..."
      },
      errors: {
        required: "Este campo é obrigatório"
      },
      success: {
        title: "Mensagem enviada com sucesso!",
        message: "Entraremos em contato o mais breve possível.",
        button: "Fechar"
      },
      error: {
        title: "Erro ao enviar mensagem",
        message: "Por favor, tente novamente mais tarde.",
        button: "Fechar"
      }
    },
    en: {
      title: "Get In Touch",
      subtitle: "Interested in working together? Let's talk about your data needs.",
      contactTitle: "Contact Information",
      contactItems: [
        {
          icon: <Mail className="w-5 h-5 text-yellow-400 mt-1 mr-4" />,
          title: "Email",
          content: "lucastech216@gmail.com"
        },
        {
          icon: <Phone className="w-5 h-5 text-yellow-400 mt-1 mr-4" />,
          title: "Phone",
          content: "+55 11 98878-4991"
        },
        {
          icon: <MapPin className="w-5 h-5 text-yellow-400 mt-1 mr-4" />,
          title: "Location",
          content: "Brazil"
        }
      ],
      formLabels: {
        fullName: "Full Name",
        phone: "Phone",
        email: "Email",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending..."
      },
      placeholders: {
        fullName: "Your full name",
        phone: "(123) 456-7890",
        email: "email@example.com",
        subject: "What's the subject?",
        message: "Write your message here..."
      },
      errors: {
        required: "This field is required"
      },
      success: {
        title: "Message sent successfully!",
        message: "We'll get back to you as soon as possible.",
        button: "Close"
      },
      error: {
        title: "Error sending message",
        message: "Please try again later.",
        button: "Close"
      }
    }
  };

  const validLanguage = translations[language] ? language : 'pt';
  const {
    title,
    subtitle,
    contactTitle,
    contactItems,
    formLabels,
    placeholders,
    errors: errorMessages,
    success,
    error
  } = translations[validLanguage];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          inView={inView}
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold text-white"
              >
                {contactTitle}
              </motion.h3>

              <div className="space-y-4">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    className="flex items-start"
                  >
                    {item.icon}
                    <div>
                      <h4 className="text-gray-300 font-medium">{item.title}</h4>
                      <p className="text-gray-400">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campos do formulário */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                    {formLabels.fullName}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.fullName ? "border-red-500" : "border-gray-700"
                    } focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-800 transition-colors`}
                    placeholder={placeholders.fullName}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-1">
                      {formLabels.phone}
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phoneNumber ? "border-red-500" : "border-gray-700"
                      } focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-800 transition-colors`}
                      placeholder={placeholders.phone}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      {formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-800 transition-colors`}
                      placeholder={placeholders.email}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    {formLabels.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-800 transition-colors`}
                    placeholder={placeholders.subject}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    {formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-800 max-h-30 min-h-30 transition-colors`}
                    placeholder={placeholders.message}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </motion.div>

                <div className="flex justify-center">
                  <ActionButton
                    asButton={true}
                    type="submit"
                    variant="primary"
                    className="mt-2 "
                    disabled={status === "sending"} // Desabilita o botão enquanto o email está sendo enviado.
                  >
                    {status === "sending" ? (
                      <span className="flex items-center justify-center">
                        {/* Ícone de carregamento para feedback visual */}
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {formLabels.sending}
                      </span>
                    ) : (
                      formLabels.submit
                    )}
                  </ActionButton>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Modal de sucesso/erro que aparece após o envio do formulário. */}
        <AnimatePresence>
          {(status === "success" || status === "error") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4"
              onClick={() => setStatus("")} // Fecha o modal ao clicar fora.
            >
              <motion.div
                className="bg-gray-900 rounded-xl p-6 w-full max-w-md text-center shadow-xl border border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche-o.
              >
                <div className="mb-4">
                  {/* Ícones de sucesso ou erro, dependendo do status. */}
                  {status === "success" ? (
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-white mb-2">
                    {status === "success" ? success.title : error.title}
                  </h2>
                  <p className="text-gray-300">
                    {status === "success" ? success.message : error.message}
                  </p>
                </div>
                <div className="flex justify-center">
                  <ActionButton
                    asButton={true}
                    onClick={() => setStatus("")}
                    variant="secondary"
                  >
                    {status === "success" ? success.button : error.button}
                  </ActionButton>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;