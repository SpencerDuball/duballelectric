import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Hospital, HospitalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Hospital",
  component: Hospital,
} as ComponentMeta<typeof Hospital>;

const Template: ComponentStory<typeof Hospital> = (args: HospitalPropsI) => (
  <x.div display="flex" gap="20px">
    <Hospital {...args} />
    <Hospital {...args} fill="red.500" />
    <Hospital {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
