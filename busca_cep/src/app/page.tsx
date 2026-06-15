"use client";
import "./globals.css";

import { useState, useRef, ChangeEvent } from "react";

interface ViaCepResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

interface AddressForm {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  city: string;
}

export default function AddressPage() {
  const [formData, setFormData] = useState<AddressForm>({
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    state: "",
    city: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const numberInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleCepFocus = () => {
    setHasError(false);
  };

  const handleCepBlur = async () => {
    const cleanCep = formData.cep.replace(/\D/g, "");

    if (/\d{5}-?\d{3}/.test(cleanCep)) {
      await loadCepInfo(cleanCep);
    } else if (cleanCep.length > 0) {
      showCepError();
    }
  };

  const loadCepInfo = async (cep: string) => {
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: ViaCepResponse = await response.json();

      if (data.erro) {
        showCepError();
      } else {
        setFormData((prev) => ({
          ...prev,
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        }));

        numberInputRef.current?.focus();
      }
    } catch (error) {
      showCepError();
    } finally {
      setIsLoading(false);
    }
  };

  const showCepError = () => {
    setHasError(true);
    setFormData((prev) => ({
      ...prev,
      street: "",
      number: "",
      neighborhood: "",
      state: "",
      city: "",
    }));
  };

  return (
    <main>
      <div className="card">
        <form
          className={isLoading ? "loading" : ""}
          onSubmit={(e) => e.preventDefault()}
        >
          <h2>Consultar Endereço</h2>

          {hasError && <div id="cepError">O CEP informado é inválido.</div>}

          <div className="row">
            {isLoading && (
              <img src="img/spinner.svg" alt="loading" id="loading" />
            )}

            <input
              type="text"
              id="cep"
              placeholder="CEP"
              autoFocus
              value={formData.cep}
              onChange={handleInputChange}
              onFocus={handleCepFocus}
              onBlur={handleCepBlur}
              className={hasError ? "input-cep-error" : ""}
            />

            
          </div>

          <div className="row">
            <input
              type="text"
              id="street"
              placeholder="Rua"
              value={formData.street}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              id="number"
              placeholder="Número"
              ref={numberInputRef}
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              id="neighborhood"
              placeholder="Bairro"
              value={formData.neighborhood}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              id="state"
              placeholder="Estado"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              id="city"
              placeholder="Cidade"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
