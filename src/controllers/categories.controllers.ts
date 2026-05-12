import { Request, Response } from "express";

import { createcategoriesservices } from "../services/categories.services";

export const createCategory = async (req: Request,res: Response) => {

  try {

    const data = await createcategoriesservices(req.body);

    res.status(201).json({
      message: "Category created successfully",
      data
    });

  } catch (err: any) {

    res.status(400).json({
      message: err.message
    });

  }
};
    
      
 