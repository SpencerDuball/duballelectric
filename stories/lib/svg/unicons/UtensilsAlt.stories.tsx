import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UtensilsAlt, UtensilsAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/UtensilsAlt",
  component: UtensilsAlt,
} as ComponentMeta<typeof UtensilsAlt>;

const Template: ComponentStory<typeof UtensilsAlt> = (
  args: UtensilsAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <UtensilsAlt {...args} />
    <UtensilsAlt {...args} fill="red.500" />
    <UtensilsAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
