import { isAxiosError } from "axios";
import apiClient from "../../../api/apiClient";
import type { Misa } from "../interfaces/listMisas.interface";

export const getListMisasAction = async (): Promise<Misa[]> => {
  try {
    const { data } = await apiClient.get<Misa[]>(
      "/misas?select=*,tipomisa(nombre,precio),usuario_creador:authusuarios!misas_idusuariocreacion_fkey(nombre,correo)",
    );
    return Array.isArray(data) ? data : [];
  } catch (error) {
    if (
      isAxiosError(error) &&
      [400, 401, 422].includes(error.response?.status ?? 0)
    ) {
      const errorMessage =
        error.response?.data?.error || "Error al obtener el listado";
      throw new Error(errorMessage);
    }
    throw new Error("No se pudo realizar la petición");
  }
};
