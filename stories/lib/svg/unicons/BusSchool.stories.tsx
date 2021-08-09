import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BusSchool, BusSchoolPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BusSchool",
  component: BusSchool,
} as ComponentMeta<typeof BusSchool>;

const Template: ComponentStory<typeof BusSchool> = (args: BusSchoolPropsI) => (
  <x.div display="flex" gap="20px">
    <BusSchool {...args} />
    <BusSchool {...args} fill="red.500" />
    <BusSchool {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
