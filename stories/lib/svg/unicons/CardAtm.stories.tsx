import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CardAtm, CardAtmPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CardAtm",
  component: CardAtm,
} as ComponentMeta<typeof CardAtm>;

const Template: ComponentStory<typeof CardAtm> = (args: CardAtmPropsI) => (
  <Box display="flex" gap="20px">
    <CardAtm {...args} />
    <CardAtm {...args} fill="red.500" />
    <CardAtm {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
