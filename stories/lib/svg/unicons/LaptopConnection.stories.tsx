import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LaptopConnection, LaptopConnectionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LaptopConnection",
  component: LaptopConnection,
} as ComponentMeta<typeof LaptopConnection>;

const Template: ComponentStory<typeof LaptopConnection> = (
  args: LaptopConnectionPropsI
) => (
  <x.div display="flex" gap="20px">
    <LaptopConnection {...args} />
    <LaptopConnection {...args} fill="red.500" />
    <LaptopConnection {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
