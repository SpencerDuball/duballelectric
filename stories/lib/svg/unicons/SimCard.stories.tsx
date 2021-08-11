import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SimCard, SimCardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SimCard",
  component: SimCard,
} as ComponentMeta<typeof SimCard>;

const Template: ComponentStory<typeof SimCard> = (args: SimCardPropsI) => (
  <Box display="flex" gap="20px">
    <SimCard {...args} />
    <SimCard {...args} fill="red.500" />
    <SimCard {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
