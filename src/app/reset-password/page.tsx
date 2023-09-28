"use client";

import { BasePage } from "@/components/layout/BasePage";
import { Alert, Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { resetPassword } from "../api/resetPassword";

export default function ResetPasswordPage() {
  // dados que o usuário preencheu no formulário
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // controla o estado do formulário (loading e erro)
  const [formController, setFormController] = useState({
    loading: false,
    errorMessage: '',
  });

  async function doResetPassword() {
    // verifica se o usuário preencheu os campos
    if (!formData.username || !formData.password) {
      setFormController({
        ...formController,
        errorMessage: 'Preencha os campos',
      });
      return;
    }

    // mostra o loading
    setFormController({
      ...formController,
      loading: true,
      errorMessage: '',
    });

    // faz a requisição pra API
    const response = await resetPassword(formData.username, formData.password);

    // se deu erro, mostra a mensagem de erro
    if (!response.success) {
      setFormController({
        ...formController,
        loading: false,
        errorMessage: response.errorMessage,
      });
      return;
    }

    // limpa o loading e o erro
    setFormController({
      ...formController,
      loading: false,
      errorMessage: '',
    });

    // mostrar mensagem de sucesso
    alert('Senha resetada com sucesso!');

    // redirecionar para a página de login
    window.location.href = '/dashboard';
  }

  return (
    <BasePage>
      <div className="py-32">
        <div className="m-auto p-8 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="mb-8">Resetar Senha</h2>

          <TextInput
            className="mb-4"
            type="text"
            placeholder="username"
            value={formData.username}
            onChange={(e) => setFormData({
              ...formData,
              username: e.target.value,
            })}
          />
          <TextInput
            className="mb-4"
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={(e) => setFormData({
              ...formData,
              password: e.target.value,
            })}
          />
          <Button
            className="mb-12"
            fullSized
            isProcessing={formController.loading}
            disabled={formController.loading}
            onClick={doResetPassword}
          >
            Resetar senha
          </Button>

          {!!formController.errorMessage && (
            <Alert color="failure">
              {formController.errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </BasePage>
  );
}