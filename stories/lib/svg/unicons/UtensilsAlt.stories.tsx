import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UtensilsAlt, UtensilsAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UtensilsAlt",
  component: UtensilsAlt,
} as ComponentMeta<typeof UtensilsAlt>;

const Template: ComponentStory<typeof UtensilsAlt> = (
  args: UtensilsAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <UtensilsAlt {...args} />
    <UtensilsAlt {...args} fill="red.500" />
    <UtensilsAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
