import { List } from "@prisma/client"
import { z } from "zod"

import { ActionState } from "@/lib/create-safe-action"

import { UpdateListSchema } from "./schema"

export type InputType = z.infer<typeof UpdateListSchema>
export type ReturnType = ActionState<InputType, List>
